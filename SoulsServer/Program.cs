using Microsoft.EntityFrameworkCore;
using SoulsServer.Database;

var builder = WebApplication.CreateBuilder(args);

var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");

builder.Services.AddControllers();
builder.Services.AddOpenApi().AddOpenApiDocument();
builder.Services.AddDbContextPool<SoulsDbContext>(options => options.UseNpgsql(connectionString));

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
    app.UseSwaggerUi();
}

app.UseHttpsRedirection();

app.MapControllers();

app.Run();
