using System.Diagnostics.CodeAnalysis;
using System.Runtime.Serialization;

namespace Security.Application.Common.Exceptions;

[Serializable]
public class ManagedException : Exception {

    public ManagedException() {
    }

    public ManagedException(string message) : base(message) {
    }

    public ManagedException(string message, Exception? innerException) : base(message, innerException) {
    }

    protected ManagedException(SerializationInfo info, StreamingContext context) : base(info, context) {
    }

    public static void ThrowIf([DoesNotReturnIf(true)] bool when, string message) {
        if (when)
            Throw(message);
    }

    public static void ThrowIfFalse([DoesNotReturnIf(false)] bool when, string message) {
        if (!when)
            Throw(message);
    }

    public static void ThrowIfNull([NotNull] object? obj, string message) {
        if (obj is null)
            Throw(message);
    }

    public static T ThrowIfNull<T>([NotNull] T? obj, string message) {
        if (obj is null)
            Throw(message);
        return obj;
    }

    public static void ThrowIfNullOrEmpty([NotNull] string? obj, string message) {
        if (string.IsNullOrEmpty(obj))
            Throw(message);
    }

    [DoesNotReturn]
    public static void Throw(string message) {
        throw new ManagedException(message);
    }
}