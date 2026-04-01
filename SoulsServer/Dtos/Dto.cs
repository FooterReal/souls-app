using System.Text.RegularExpressions;
using SoulsServer.Regx;

namespace SoulsServer.Dtos;

public static class Dto
{
    private static readonly List<Type> NumberTypes = [
        typeof(int),
        typeof(double),
        typeof(float),
        typeof(decimal),
        typeof(long),
        typeof(short),
        typeof(byte)
    ];

    public static Dictionary<string, string> GetFieldTypes<T>() where T : class
    {
        return typeof(T)
            .GetProperties()
            .ToDictionary(
                prop => DtoRegx.UpperCaseStartRegex().Replace(prop.Name, m => m.Value.ToLowerInvariant()),
                prop =>
            {
                if (prop.PropertyType == typeof(string))
                {
                    return "string";
                }
                else if (NumberTypes.Contains(prop.PropertyType))
                {
                    return "number";
                }
                else if (prop.PropertyType == typeof(bool))
                {
                    return "bool";
                }
                else if (prop.PropertyType.IsEnum)
                {
                    return $"lov|{string.Join("|", Enum.GetNames(prop.PropertyType))}";
                }
                else
                {
                    return "unknown";
                }
            }
        );
    }
}