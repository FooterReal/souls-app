namespace SoulsServer.Models;

using System.ComponentModel.DataAnnotations;
using SoulsServer.Enums;

public class Skill
{
    public int Id { get; set; }

    [Required]
    [MaxLength(50)]
    public string Name { get; set; } = string.Empty;

    [Required]
    public Stat ConnectedStat { get; set; }
}