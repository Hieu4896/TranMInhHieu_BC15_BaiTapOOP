var dsnv = new DanhSachNhanVien();
var validate = new Validation();
getLocalStorage();
function getEle(id) {
  return document.getElementById(id);
}

function layThongTinNhanVien(isAdd) {
  //Dom tới các thẻ input lấy thông tin người dùng nhập vào
  var _taiKhoan = getEle("tknv").value;
  var _hoTen = getEle("name").value;
  var _email = getEle("email").value;
  var _matKhau = getEle("password").value;
  var _ngayLam = getEle("datepicker").value;
  var _luong = getEle("luongCB").value;
  var _chucVu = getEle("chucvu").value;
  var _gioLam = getEle("gioLam").value;

  var isValid = true;

  //Check Validation
  if (isAdd) {
    isValid &=
      validate.kiemTraRong(
        _taiKhoan,
        "tbTKNV",
        "(*) Vui lòng không để trống"
      ) &&
      validate.kiemTraKiTu(
        _taiKhoan,
        "tbTKNV",
        "(*) Vui lòng nhập từ 4 - 6 kí số",
        4,
        6
      ) &&
      validate.kiemTraSo(_taiKhoan, "tbTKNV", "(*) Vui lòng nhập vào số") &&
      validate.kiemTraTrungTaiKhoan(
        _taiKhoan,
        "tbTKNV",
        "(*) Tài khoản đã tồn tại",
        dsnv.array
      );
    isValid &=
      validate.kiemTraRong(_hoTen, "tbTen", "(*) Vui lòng không để trống") &&
      validate.kiemTraChuoi(_hoTen, "tbTen", "(*) Vui lòng nhập vào kí tự");
    isValid &=
      validate.kiemTraRong(_email, "tbEmail", "(*) Vui lòng không để trống") &&
      validate.kiemTraEmail(
        _email,
        "tbEmail",
        "(*) Vui lòng nhập email đúng định dạng"
      );
    isValid &=
      validate.kiemTraRong(
        _matKhau,
        "tbMatKhau",
        "(*) Vui lòng không để trống"
      ) &&
      validate.kiemTraMatKhau(
        _matKhau,
        "tbMatKhau",
        "(*) Vui lòng nhập mật khẩu đúng định dạng"
      ) &&
      validate.kiemTraKiTu(
        _matKhau,
        "tbMatKhau",
        "(*) Vui lòng nhập từ 6 - 10 kí tự",
        6,
        10
      );
    isValid &=
      validate.kiemTraRong(_ngayLam, "tbNgay", "(*) Vui lòng không để trống") &&
      validate.kiemTraNgayLam(
        _ngayLam,
        "tbNgay",
        "(*) Vui lòng nhập ngày làm đúng dịnh dạng"
      );
    isValid &=
      validate.kiemTraRong(
        _luong,
        "tbLuongCB",
        "(*) Vui lòng không để trống"
      ) &&
      validate.luongCoBan(
        _luong,
        "tbLuongCB",
        "(*) Vui lòng nhập lương từ 1000000 đến 20000000"
      );
    isValid &=
      validate.kiemTraRong(
        _chucVu,
        "tbChucVu",
        "(*) Vui lòng không để trống"
      ) &&
      validate.chonChucVu("chucvu", "tbChucVu", "(*) Vui lòng chọn chức vụ");
    isValid &=
      validate.kiemTraRong(
        _gioLam,
        "tbGiolam",
        "(*) Vui lòng không để trống"
      ) &&
      validate.gioLam(
        _gioLam,
        "tbGiolam",
        "(*) Vui lòng nhập giờ làm từ 80 đến 200"
      );
  }

  // Tạo đối tượng nhanVien từ lớp đối tượng NhanVien
  if (isValid) {
    var nhanVien = new NhanVien(
      _taiKhoan,
      _hoTen,
      _email,
      _matKhau,
      _ngayLam,
      _luong,
      _chucVu,
      _gioLam
    );
    return nhanVien;
  }
  return null;
}
// In danh sách nhân viên
function renderListNhanVien(arr) {
  var content = "";
  for (var i = 0; i < arr.length; i++) {
    content += `
      <tr>
      <td>${arr[i].taiKhoan}</td>
      <td>${arr[i].hoTen}</td>
      <td>${arr[i].email}</td>
      <td>${arr[i].matKhau}</td>
      <td>${arr[i].ngayLam}</td>
      <td>${arr[i].luong}</td>
      <td>${arr[i].chucVu}</td>
      <td>${arr[i].gioLam}</td>
      <td>${arr[i].tongLuong}</td>
      <td>${arr[i].xepLoai}</td>
      <td><button class="btn btn-danger" onClick="xoaNhanVien('${arr[i].taiKhoan}')">Xóa</button></td>
      <td><button class="btn btn-warning" onClick="suaNhanVien('${arr[i].taiKhoan}')">Sửa</button></td>
      </tr>
      `;
  }
  getEle("tbodyNhanVien").innerHTML = content;
}
// Xóa Nhân viên

function xoaNhanVien(taiKhoan) {
  dsnv.xoaNhanVien(taiKhoan);
  renderListNhanVien(dsnv.array);
}

// Sửa nhân viên
function suaNhanVien(taiKhoan) {
  var nhanVien = dsnv.suaNhanVien(taiKhoan);
  console.log(nhanVien);
  //DOM tới thẻ input show thông tin ra
  getEle("tknv").value = nhanVien.taiKhoan;
  getEle("tknv").disabled = true;
  getEle("name").value = nhanVien.hoTen;
  getEle("email").value = nhanVien.email;
  getEle("password").value = nhanVien.matKhau;
  getEle("datepicker").value = nhanVien.ngayLam;
  getEle("luongCB").value = nhanVien.luong;
  getEle("chucvu").value = nhanVien.chucVu;
  getEle("gioLam").value = nhanVien.gioLam;

  // Hiển thị nút cập nhật
  getEle("btnCapNhat").style.display = "block";
  // Ẩn nút thêm
  getEle("btnThemNV").style.display = "none";

  // Hiển thị nút reset
  getEle("btnReset").style.display = "block";
}
/**
 * Cập nhật nhân viên
 */
getEle("btnCapNhat").addEventListener("click", function () {
  // Lấy giá trị mới từ các thẻ input
  var nhanVien = layThongTinNhanVien(false);
  nhanVien.tinhTongLuong();
  nhanVien.xepLoaiNhanVien();
  dsnv.capNhatNhanVien(nhanVien);
  renderListNhanVien(dsnv.array);
  setLocalStorage();
});

// Thêm Nhân viên

getEle("btnThemNV").addEventListener("click", function () {
  var nhanVien = layThongTinNhanVien(true);
  if (nhanVien) {
    nhanVien.tinhTongLuong();
    nhanVien.xepLoaiNhanVien();
    dsnv.themNhanVien(nhanVien);
    renderListNhanVien(dsnv.array);
    setLocalStorage();
  }
});

/** Reset form */
getEle("btnReset").addEventListener("click", function () {
  getEle("tknv").value = "";
  getEle("tknv").disabled = false;
  getEle("name").value = "";
  getEle("email").value = "";
  getEle("password").value = "";
  getEle("datepicker").value = "";
  getEle("luongCB").value = "";
  getEle("chucvu").value = "";
  getEle("gioLam").value = "";
  getEle("btnCapNhat").style.display = "none";
  getEle("btnThemNV").style.display = "block";
});

/** Search */
getEle("searchName").addEventListener("keyup", function () {
  var keyword = getEle("searchName").value;
  var mangTimKiem = dsnv.timKiemNhanVien(keyword);
  renderListNhanVien(mangTimKiem);
});

/**
 * Lưu mảng sinh viên xuống Local Storage
 * Chuyển kiểu JSON => String JSON.stringify*/
function setLocalStorage() {
  var arrString = JSON.stringify(dsnv.array);
  localStorage.setItem("DSNV", arrString);
}
/**
 * Lấy DSNV từ local Storage lên
 * chuyển kiểu String => JSOn
 */

function getLocalStorage() {
  var data = localStorage.getItem("DSNV");
  dsnv.array = JSON.parse(data);
  renderListNhanVien(dsnv.array);
}
