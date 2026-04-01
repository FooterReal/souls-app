namespace SoulsServer.Dtos.Skills;

public class SkillsDto
{
    public List<SkillDto> Skills { get; set; } = [];
    public Dictionary<string, string> FieldTypes => Dto.GetFieldTypes<SkillDto>();
}