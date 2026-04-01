namespace SoulsServer.Dtos.Skills;

using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SoulsServer.Database;
using SoulsServer.Dtos.Skills;
using SoulsServer.Models;

[ApiController]
[Route("api/skills")]
public class SkillsController : ControllerBase
{
    private readonly SoulsDbContext _context;

    public SkillsController(SoulsDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<SkillsDto>> GetSkills()
    {
        return new SkillsDto
        {
            Skills = await _context.Skills
                .Select(s => new SkillDto
                {
                    Id = s.Id,
                    Name = s.Name,
                    ConnectedStat = s.ConnectedStat
                })
                .ToListAsync()
        };
    }

    [HttpPost]
    public async Task<ActionResult<int>> CreateSkill()
    {
        var skill = new Skill
        {
            Name = "New Skill",
            ConnectedStat = Enums.Stat.Strength
        };

        _context.Skills.Add(skill);
        await _context.SaveChangesAsync();

        return skill.Id;
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateSkill(int id, SkillDto skillDto)
    {
        var skill = await _context.Skills.FindAsync(id);
        
        if (skill == null)
        {
            return NotFound();
        }

        skill.Name = skillDto.Name;
        skill.ConnectedStat = skillDto.ConnectedStat;

        _context.Skills.Update(skill);
        await _context.SaveChangesAsync();

        return NoContent();
    }


    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteSkill(int id)
    {
        var skill = await _context.Skills.FindAsync(id);
        if (skill == null)
        {
            return NotFound();
        }

        _context.Skills.Remove(skill);
        await _context.SaveChangesAsync();

        return NoContent();
    }
}