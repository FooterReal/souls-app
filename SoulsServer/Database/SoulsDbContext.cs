namespace SoulsServer.Database;

using Microsoft.EntityFrameworkCore;
using SoulsServer.Models;

public class SoulsDbContext(DbContextOptions<SoulsDbContext> options) : DbContext(options)
{
    public DbSet<Soul> Souls { get; set; }
    public DbSet<Skill> Skills { get; set; }
}