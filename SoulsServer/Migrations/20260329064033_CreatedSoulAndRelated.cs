using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace SoulsServer.Migrations
{
    /// <inheritdoc />
    public partial class CreatedSoulAndRelated : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Class",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Name = table.Column<string>(type: "character varying(50)", maxLength: 50, nullable: false),
                    ClassSoulAbility = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Class", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Proficiency",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Name = table.Column<string>(type: "character varying(100)", maxLength: 100, nullable: false),
                    Type = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Proficiency", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "SoulType",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Name = table.Column<string>(type: "character varying(255)", maxLength: 255, nullable: false),
                    Description = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SoulType", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Trait",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Name = table.Column<string>(type: "character varying(100)", maxLength: 100, nullable: false),
                    Description = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Trait", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Souls",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Name = table.Column<string>(type: "character varying(255)", maxLength: 255, nullable: false),
                    Level = table.Column<int>(type: "integer", nullable: false),
                    Alignment = table.Column<int>(type: "integer", nullable: false),
                    SoulTypeId = table.Column<int>(type: "integer", nullable: false),
                    ClassId = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Souls", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Souls_Class_ClassId",
                        column: x => x.ClassId,
                        principalTable: "Class",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Souls_SoulType_SoulTypeId",
                        column: x => x.SoulTypeId,
                        principalTable: "SoulType",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ProficiencySoul",
                columns: table => new
                {
                    ProficienciesId = table.Column<int>(type: "integer", nullable: false),
                    SoulsId = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProficiencySoul", x => new { x.ProficienciesId, x.SoulsId });
                    table.ForeignKey(
                        name: "FK_ProficiencySoul_Proficiency_ProficienciesId",
                        column: x => x.ProficienciesId,
                        principalTable: "Proficiency",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ProficiencySoul_Souls_SoulsId",
                        column: x => x.SoulsId,
                        principalTable: "Souls",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "SoulTrait",
                columns: table => new
                {
                    SoulsId = table.Column<int>(type: "integer", nullable: false),
                    TraitsId = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SoulTrait", x => new { x.SoulsId, x.TraitsId });
                    table.ForeignKey(
                        name: "FK_SoulTrait_Souls_SoulsId",
                        column: x => x.SoulsId,
                        principalTable: "Souls",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_SoulTrait_Trait_TraitsId",
                        column: x => x.TraitsId,
                        principalTable: "Trait",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_ProficiencySoul_SoulsId",
                table: "ProficiencySoul",
                column: "SoulsId");

            migrationBuilder.CreateIndex(
                name: "IX_Souls_ClassId",
                table: "Souls",
                column: "ClassId");

            migrationBuilder.CreateIndex(
                name: "IX_Souls_SoulTypeId",
                table: "Souls",
                column: "SoulTypeId");

            migrationBuilder.CreateIndex(
                name: "IX_SoulTrait_TraitsId",
                table: "SoulTrait",
                column: "TraitsId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ProficiencySoul");

            migrationBuilder.DropTable(
                name: "SoulTrait");

            migrationBuilder.DropTable(
                name: "Proficiency");

            migrationBuilder.DropTable(
                name: "Souls");

            migrationBuilder.DropTable(
                name: "Trait");

            migrationBuilder.DropTable(
                name: "Class");

            migrationBuilder.DropTable(
                name: "SoulType");
        }
    }
}
