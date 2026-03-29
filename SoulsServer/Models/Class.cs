using System.ComponentModel.DataAnnotations;

namespace SoulsServer.Models;

public class Class
{
    public int Id { get; set; }

    [Required]
    [MaxLength(50)]
    public string Name { get; set; } = string.Empty;

    [Required]
    public string ClassSoulAbility { get; set; } = string.Empty;

    public List<Soul> Souls { get; set; } = [];
}