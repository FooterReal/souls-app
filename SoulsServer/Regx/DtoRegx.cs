using System.Text.RegularExpressions;

namespace SoulsServer.Regx;

public static partial class DtoRegx
{
    [GeneratedRegex(@"^([A-Z])", RegexOptions.Compiled)]
    public static partial Regex UpperCaseStartRegex();
}