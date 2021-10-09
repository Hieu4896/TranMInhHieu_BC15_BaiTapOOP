function Validation() {
  this.kiemTraRong = function (input, divId, mess) {
    if (input.trim() === "") {
      getEle(divId).innerHTML = mess;
      return false;
    }
    getEle(divId).innerHTML = "";
    return true;
  };

  this.kiemTraKiTu = function (input, divId, mess, min, max) {
    if (input.length >= min && input.length <= max) {
      getEle(divId).innerHTML = "";
      return true;
    }
    getEle(divId).innerHTML = mess;
    return false;
  };

  this.kiemTraChuoi = function (input, divId, mess) {
    var letter =
      "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
      "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
      "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$";

    if (input.match(letter)) {
      getEle(divId).innerHTML = "";
      return true;
    }

    getEle(divId).innerHTML = mess;
    return false;
  };

  this.kiemTraEmail = function (input, divId, mess) {
    var letter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (input.match(letter)) {
      getEle(divId).innerHTML = "";
      return true;
    }

    getEle(divId).innerHTML = mess;
    return false;
  };

  this.kiemTraSo = function (input, divId, mess) {
    var letter = /^[0-9]+$/;

    if (input.match(letter)) {
      getEle(divId).innerHTML = "";
      return true;
    }

    getEle(divId).innerHTML = mess;
    return false;
  };

  this.kiemTraMatKhau = function (input, divId, mess) {
    var letter =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/;

    if (input.match(letter)) {
      getEle(divId).innerHTML = "";
      return true;
    }

    getEle(divId).innerHTML = mess;
    return false;
  };

  this.kiemTraNgayLam = function (input, divId, mess) {
    var letter =
      /^((0?[1-9]|1[012])[- /.](0?[1-9]|[12][0-9]|3[01])[- /.](19|20)?[0-9]{2})*$/;
    if (input.match(letter)) {
      getEle(divId).innerHTML = "";
      return true;
    }
    getEle(divId).innerHTML = mess;
    return false;
  };

  this.luongCoBan = function (input, divId, mess) {
    if (1000000 <= input && input <= 20000000) {
      getEle(divId).innerHTML = "";
      return true;
    }
    getEle(divId).innerHTML = mess;
    return false;
  };

  this.gioLam = function (input, divId, mess) {
    if (80 <= input && input <= 200) {
      getEle(divId).innerHTML = "";
      return true;
    }
    getEle(divId).innerHTML = mess;
    return false;
  };

  this.chonChucVu = function (idSelect, divId, mess) {
    if (getEle(idSelect).selectedIndex != 0) {
      getEle(divId).innerHTML = "";
      return true;
    }
    getEle(divId).innerHTML = mess;
    return false;
  };

  this.kiemTraTrungTaiKhoan = function (input, divId, mess, arr) {
    isStatus = true;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].taiKhoan === input) {
        isStatus = false;
        break;
      }
    }
    if (isStatus) {
      getEle(divId).innerHTML = "";
      return true;
    }
    getEle(divId).innerHTML = mess;
    return false;
  };
}
