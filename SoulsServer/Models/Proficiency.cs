namespace SoulsServer.Models;

using System.ComponentModel.DataAnnotations;
using SoulsServer.Enums;

public class Proficiency
{
    public int Id { get; set; }

    [Required]
    [MaxLength(100)]
    public string Name { get; set; } = string.Empty;

    [Required]
    public ProficiencyType Type { get; set; }

    public List<Soul> Souls { get; set; } = [];
}