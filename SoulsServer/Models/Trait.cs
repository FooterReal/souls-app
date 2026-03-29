namespace SoulsServer.Models;

using System.ComponentModel.DataAnnotations;

public class Trait
{
    public int Id { get; set; }

    [Required]
    [MaxLength(100)]
    public string Name { get; set; } = string.Empty;

    [Required]
    public string Description { get; set; } = string.Empty;

    public List<Soul> Souls { get; set; } = [];
}