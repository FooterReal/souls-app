using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SoulsServer.Migrations
{
    /// <inheritdoc />
    public partial class MadeSoulTypeAndClassNullable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Souls_Class_ClassId",
                table: "Souls");

            migrationBuilder.DropForeignKey(
                name: "FK_Souls_SoulType_SoulTypeId",
                table: "Souls");

            migrationBuilder.AlterColumn<int>(
                name: "SoulTypeId",
                table: "Souls",
                type: "integer",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "integer");

            migrationBuilder.AlterColumn<int>(
                name: "ClassId",
                table: "Souls",
                type: "integer",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "integer");

            migrationBuilder.AddForeignKey(
                name: "FK_Souls_Class_ClassId",
                table: "Souls",
                column: "ClassId",
                principalTable: "Class",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Souls_SoulType_SoulTypeId",
                table: "Souls",
                column: "SoulTypeId",
                principalTable: "SoulType",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Souls_Class_ClassId",
                table: "Souls");

            migrationBuilder.DropForeignKey(
                name: "FK_Souls_SoulType_SoulTypeId",
                table: "Souls");

            migrationBuilder.AlterColumn<int>(
                name: "SoulTypeId",
                table: "Souls",
                type: "integer",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "integer",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "ClassId",
                table: "Souls",
                type: "integer",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "integer",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Souls_Class_ClassId",
                table: "Souls",
                column: "ClassId",
                principalTable: "Class",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Souls_SoulType_SoulTypeId",
                table: "Souls",
                column: "SoulTypeId",
                principalTable: "SoulType",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
