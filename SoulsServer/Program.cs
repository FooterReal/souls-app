using Microsoft.EntityFrameworkCore;
using SoulsServer.Database;

var builder = WebApplication.CreateBuilder(args);

var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");

builder.Services
    .AddDbContextPool<SoulsDbContext>(options => options.UseNpgsql(connectionString))
    .AddOpenApi()
    .AddOpenApiDocument();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseOpenApi();
    app.UseSwaggerUi();
}

app.MapGet("/", () => "Hello World!");

app.Run();
