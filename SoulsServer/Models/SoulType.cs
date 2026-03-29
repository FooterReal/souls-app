namespace SoulsServer.Models;

using System.ComponentModel.DataAnnotations;

public class SoulType
{
    public int Id { get; set; }

    [Required]
    [MaxLength(255)]
    public string Name { get; set; } = string.Empty;

    [Required]
    public string Description { get; set; } = string.Empty;

    public List<Soul> Souls { get; set; } = [];
}