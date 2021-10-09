function DanhSachNhanVien() {
  this.array = [];
  this.themNhanVien = function (nv) {
    this.array.push(nv);
  };
  this.timViTri = function (tk) {
    var index = -1;
    for (var i = 0; i < this.array.length; i++) {
      if (this.array[i].taiKhoan == tk) {
        index = i;
        break;
      }
    }
    return index;
  };

  this.xoaNhanVien = function (tk) {
    var index = this.timViTri(tk);
    if (index !== -1) {
      this.array.splice(index, 1);
    }
  };

  this.suaNhanVien = function (taiKhoan) {
    var index = this.timViTri(taiKhoan);
    if (index != -1) {
      //tìm thấy => lấy thông tin sinh viên cần tìm
      return this.array[index];
    }
  };

  this.capNhatNhanVien = function (nv) {
    var index = this.timViTri(nv.taiKhoan);
    if (index != -1) {
      this.array[index] = nv;
    }
  };
}
DanhSachNhanVien.prototype.timKiemNhanVien = function (keyword) {
  /**
   * 0 Tạo mảng tìm kiếm []
   * 1 Duyệt mảng this.array[]
   * 2 Nếu nhanVien.xepLoai trùng với keyword
   * => tìm thấy : thêm nhân viên vô mảng tìm kiếm
   * 3 trả vê mảng tìm kiếm
   */
  var mangTimKiem = [];
  for (var i = 0; i < this.array.length; i++) {
    if (
      this.array[i].xepLoai.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
    ) {
      mangTimKiem.push(this.array[i]);
    }
  }
  return mangTimKiem;
};
