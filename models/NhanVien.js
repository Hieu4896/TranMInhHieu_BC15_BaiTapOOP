function NhanVien(
  _taiKhoan,
  _hoTen,
  _email,
  _matKhau,
  _ngayLam,
  _luong,
  _chucVu,
  _gioLam
) {
  this.taiKhoan = _taiKhoan;
  this.hoTen = _hoTen;
  this.email = _email;
  this.matKhau = _matKhau;
  this.ngayLam = _ngayLam;
  this.luong = _luong;
  this.chucVu = _chucVu;
  this.gioLam = _gioLam;

  this.tongLuong = 0;
  this.xepLoai = "";

  this.tinhTongLuong = function () {
    if (this.chucVu == "Sếp") {
      this.tongLuong = parseFloat(this.luong) * 3;
    } else if (this.chucVu == "Truong phong") {
      this.tongLuong = parseFloat(this.luong) * 2;
    } else if (this.chucVu == "Nhân viên") {
      this.tongLuong = parseFloat(this.luong);
    }
  };

  this.xepLoaiNhanVien = function () {
    if (this.gioLam >= 192) {
      this.xepLoai = "Nhân viên xuất sắc";
    } else if (this.gioLam >= 176) {
      this.xepLoai = "Nhân viên giỏi";
    } else if (this.gioLam >= 160) {
      this.xepLoai = "Nhân viên khá";
    } else if (this.gioLam < 160) {
      this.xepLoai = "Nhân viên trung bình";
    }
  };
}
