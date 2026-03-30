namespace SoulsServer.Dtos.Souls;

using SoulsServer.Enums;

public class ProficiencyDto
{
    public string Name { get; set; } = string.Empty;
    public ProficiencyType Type { get; set; } = ProficiencyType.None;
}