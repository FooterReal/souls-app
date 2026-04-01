namespace SoulsServer.Dtos.Skills;

using SoulsServer.Enums;

public class SkillDto
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public Stat ConnectedStat { get; set; } = Stat.Strength;
}