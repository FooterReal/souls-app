namespace SoulsServer.Dtos.Souls;

public class SoulDetailsDto
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public int Level { get; set; }
    public string ImageLink { get; set; } = string.Empty;

    public SoulTypeDto? SoulType { get; set; } = null!;
    public ClassDto? Class { get; set; } = null!;

    public List<ProficiencyDto> Proficiencies { get; set; } = [];
    public List<TraitDto> Traits { get; set; } = [];
}