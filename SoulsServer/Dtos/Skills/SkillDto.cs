namespace SoulsServer.Dtos.Skills;

using SoulsServer.Enums;
using System.Collections.Generic;

public class SkillDto : BaseDto
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public Stat ConnectedStat { get; set; } = Stat.Strength;

    /*public Dictionary<string, string> FieldTypes => new Dictionary<string, string>
    {
        { nameof(Id).ToLowerInvariant(), "number" },
        { nameof(Name).ToLowerInvariant(), "string" },
        { nameof(ConnectedStat).ToLowerInvariant(), $"lov|{string.Join("|", Enum.GetNames<Stat>())}" }
    }; */
}