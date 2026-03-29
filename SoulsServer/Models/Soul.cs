namespace SoulsServer.Models;

using System.ComponentModel.DataAnnotations;
using SoulsServer.Enums;

public class Soul
{
    public int Id { get; set; }

    [Required]
    [MaxLength(255)]
    public string Name { get; set; } = string.Empty;

    [Required]
    [Range(1, 20)]
    public int Level { get; set; }

    [Required]
    public Alignment Alignment { get; set; } = Alignment.None;

    public SoulType? SoulType { get; set; } = null!;
    public Class? Class { get; set; } = null!;

    public List<Proficiency> Proficiencies { get; set; } = [];
    public List<Trait> Traits { get; set; } = [];
}