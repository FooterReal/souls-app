namespace SoulsServer.Dtos;

public class BaseDto
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

    public Dictionary<string, string> FieldTypes => GetType()
        .GetProperties()
        .Where(prop => !prop.Name.Equals(nameof(FieldTypes)))
        .ToDictionary(
            prop => prop.Name.ToLowerInvariant(),
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