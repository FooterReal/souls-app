namespace SoulsServer.Dtos;

using SoulsServer.Models;

public class SoulDetailsDto
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public int Level { get; set; }
    public string ImageLink { get; set; } = string.Empty;

    public SoulType? SoulType { get; set; } = null!;
    public Class? Class { get; set; } = null!;

    public List<Proficiency> Proficiencies { get; set; } = [];
    public List<Trait> Traits { get; set; } = [];
}