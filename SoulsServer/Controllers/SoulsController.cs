namespace SoulsServer.Controllers;

using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SoulsServer.Database;
using SoulsServer.Dtos.Souls;
using SoulsServer.Models;

[Route("api/[controller]")]
[ApiController]
public class SoulsController : ControllerBase
{
    private readonly SoulsDbContext _context;

    public SoulsController(SoulsDbContext context)
    {
        _context = context;
    }

    // GET: api/Souls
    [HttpGet]
    public async Task<ActionResult<IEnumerable<SoulsListDto>>> GetSouls()
    {
        return await _context.Souls
            .Select(s => new SoulsListDto
            {
                Id = s.Id,
                Name = s.Name,
                Level = s.Level,
                ImageLink = s.ImageLink
            })
            .ToListAsync();
    }

    [HttpPut]
    public async Task<ActionResult<int>> CreateSoul()
    {
        var soul = new Soul
        {
            Name = "New Soul",
            Level = 1
        };

        _context.Souls.Add(soul);
        await _context.SaveChangesAsync();

        return soul.Id;
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteSoul(int id)
    {
        var soul = await _context.Souls.FindAsync(id);
        if (soul == null)
        {
            return NotFound();
        }

        _context.Souls.Remove(soul);
        await _context.SaveChangesAsync();

        return NoContent();
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<SoulDetailsDto>> GetSoulDetails(int id)
    {
        var soul = await _context.Souls.FindAsync(id);

        if (soul == null)
        {
            return NotFound();
        }

        return new SoulDetailsDto
        {
            Id = soul.Id,
            Name = soul.Name,
            Level = soul.Level,
            ImageLink = soul.ImageLink
        };
    }

    /*

    // PUT: api/Souls/5
    // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
    [HttpPut("{id}")]
    public async Task<IActionResult> PutSoul(int id, Soul soul)
    {
        if (id != soul.Id)
        {
            return BadRequest();
        }

        _context.Entry(soul).State = EntityState.Modified;

        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!SoulExists(id))
            {
                return NotFound();
            }
            else
            {
                throw;
            }
        }

        return NoContent();
    }

    // POST: api/Souls
    // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
    [HttpPost]
    public async Task<ActionResult<Soul>> PostSoul(Soul soul)
    {
        _context.Souls.Add(soul);
        await _context.SaveChangesAsync();

        return CreatedAtAction("GetSoul", new { id = soul.Id }, soul);
    }

    private bool SoulExists(int id)
    {
        return _context.Souls.Any(e => e.Id == id);
    }*/
}
