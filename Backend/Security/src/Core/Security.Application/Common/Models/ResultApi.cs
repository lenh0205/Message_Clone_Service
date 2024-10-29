//using Microsoft.Data.SqlClient;
using Microsoft.Data.SqlClient;
using Newtonsoft.Json;

namespace Security.Application.Common.Models;
public class ResultApi {
    public bool Result { get; set; } = true;
    public string? ErrorMessage { get; set; } = string.Empty;
    public object? DataResult { get; set; } = null!;

    public ResultApi() {
    }

    public ResultApi(string msg) {
        Result = false;
        ErrorMessage = msg;
    }

    public static ResultApi Fail(string msg) {
        return new ResultApi {
            Result = false,
            ErrorMessage = msg
        };
    }

    public static ResultApi Fail(Exception ex) {
        return new ResultApi {
            Result = false,
            ErrorMessage = ex.InnerException is SqlException sqlEx ? sqlEx.Number switch {
                251 => "Sai kiểu dữ liệu",
                515 => "Giá trị không được để trống",
                547 => "Khoá ngoại không hợp lệ",
                2601 => "Khóa chính đã tồn tại",
                2627 => "Trường dữ liệu trùng lặp",
                _ => ex.Message
            } : ex.Message
        };
    }

    public static ResultApi Ok(object? Data = null) {
        return new ResultApi {
            Result = true,
            DataResult = Data
        };
    }


    public ResultApi(object? Data) {
        DataResult = Data;
    }

    public override string ToString() {
        return JsonConvert.SerializeObject(this);
    }
}