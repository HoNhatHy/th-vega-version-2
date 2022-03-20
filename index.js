import blogposts from "./blogposts.js";

const sectionProducts = document.querySelector(".section-products");
const testsContainer = document.querySelector(".testimonials-container");
const headerNav = document.querySelector(".header-nav");
const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".close-icon");

const thTrueMilkProducts = [
  {
    brand: "th-true-milk",
    origin: "Việt Nam",
    expired: `9 tháng kể từ ngày sản xuất`,
    src: "https://www.thmilk.vn/wp-content/uploads/2020/09/NUT-gao-lut-do-800.png",
    alt: "Sữa Hạt và Gạo Lứt Đỏ TH true NUT 180 ml",
    price: "49.000",
    detailImg:
      "https://www.thmilk.vn/wp-content/uploads/2020/09/NUT-loc-gao-lut-do-800.png",
    detailName: "LỐC SỮA HẠT VÀ GẠO LỨT ĐỎ TH TRUE NUT 180 ML X 4 HỘP",
    ingredients: `Dịch hạt óc chó và mắc ca (50%), sữa bò tươi, dịch gạo lứt
    đỏ (12,8%), chà là (5%), dịch yến mạch, chất ổn định (418,
    471, 410). KHÔNG sử dụng chất bảo quản.`,
    nutrition: `Năng lượng (53,3 kcal), Hydrat cacbon (9 g), Chất đạm (1,4
      g), Chất béo (1,3 g)`,
    taste: `Sản phẩm có vị thanh ngọt tự nhiên từ quả Chà Là - với vị ngọt tự nhiên, hàm lượng béo và chỉ số đường huyết thấp, đồng thời giàu selen, kali, sắt và chất chống oxi hóa.`,
    benefit: `Omega-3,6,9 và
    các vitamin, khoáng chất trong hạt óc chó, hạt mắc ca rất tốt
    cho sức khoẻ tổng thể.`,
  },
  {
    src: "https://www.thmilk.vn/wp-content/uploads/2020/09/NUT-Macca-800.png",
    alt: "Sữa Hạt Macca TH true NUT 180 ml",
    price: "49.000",
    detailImg:
      "https://www.thmilk.vn/wp-content/uploads/2020/09/NUT-loc-Macca-800.png",
    detailName: "LỐC SỮA HẠT MẮC CA TH TRUE NUT 180 ML X 4 HỘP",
    ingredients: `Dịch hạt mắc ca (60%), dịch yến mạch, sữa bò tươi, chà là (5%), chất ổn định (418, 471, 410). KHÔNG sử dụng chất bảo quản.`,
    nutrition: `Năng lượng (39,8 kcal), Hydrat cacbon (4,2 g), Chất đạm (0,8
      g), Chất béo (2,2 g)`,
    benefit: `Tốt cho tim mạch, tốt cho sức khỏe`,
  },
  {
    src: "https://www.thmilk.vn/wp-content/uploads/2020/09/NUT-oc-cho-800.png",
    alt: "Sữa Hạt Óc Chó TH true NUT 180 ml",
    price: "49.000",
    detailImg:
      "https://www.thmilk.vn/wp-content/uploads/2020/09/NUT-loc-oc-cho-800.png",
    detailName: "LỐC SỮA HẠT ÓC CHÓ TH TRUE NUT 180 ML X 4 HỘP",
    ingredients: `Dịch hạt óc chó (60%), dịch yến mạch, sữa bò tươi, chà là (5%), chất ổn định (418, 471, 410) KHÔNG sử dụng chất bảo quản.`,
    nutrition: `Năng lượng (40,5 kcal), Hydrat cacbon (4,4 g), Chất đạm (1
      g), Chất béo (2,1 g)`,
    benefit: `Tốt cho tim mạch, tốt cho não bộ, làm chậm quá trình lão hóa`,
  },
  {
    src: "https://www.thmilk.vn/wp-content/uploads/2020/09/NUT-hanh-nhan-800.png",
    alt: "Sữa Hạt Hạnh Nhân TH true NUT 180 ml",
    price: "49.000",
    detailImg:
      "https://www.thmilk.vn/wp-content/uploads/2020/09/NUT-loc-hanh-nhan-800.png",
    detailName: "LỐC SỮA HẠT HẠNH NHÂN TH TRUE NUT 180 ML X 4 HỘP",
    ingredients: `Dịch hạt hạnh nhân (60%), dịch yến mạch, sữa bò tươi, chà là (5%), chất ổn định (418, 471, 410) KHÔNG sử dụng chất bảo quản.`,
    nutrition: `Năng lượng (35,5 kcal), Hydrat cacbon (4,4 g), Chất đạm (1,1
      g), Chất béo (1,5 g)`,
    benefit: `Tốt cho sức khỏe tim mạch, tốt cho não bộ, tốt cho da, cung cấp các dưỡng chất có lợi cho sức khỏe`,
  },
  {
    src: "https://www.thmilk.vn/wp-content/uploads/2020/09/NUT-hat-va-gac-800.png",
    alt: "Sữa hạt và gấc TH True NUT 180ml",
    price: "49.000",
    detailImg:
      "https://www.thmilk.vn/wp-content/uploads/2020/09/NUT-loc-hat-va-gac-800.png",
    detailName: "LỐC SỮA HẠT VÀ GẤC TH TRUE NUT 180 ML X 4 HỘP",
    ingredients: `Dịch hạt óc chó và mắc ca (50%), sữa bò tươi, chà là (5,5%), dịch yến mạch, gấc puree (1,5%), chất ổn định (418, 471, 410). KHÔNG sử dụng chất bảo quản.`,
    nutrition: `Năng lượng (34,5 kcal), Hydrat cacbon (4,5 g), Chất đạm (0,75
      g), Chất béo (1,5 g)`,
    benefit: `Cung cấp chất chống oxy hóa cho mọi lứa tuổi, hỗ trợ làm chậm quá trình lão hóa, làm đẹp da. Tốt cho sức khỏe mắt, tốt cho sức khỏe tim mạch. Omega-3,6,9 và các vitamin, khoáng chất trong hạt óc chó, hạt mắc ca rất tốt cho sức khoẻ tổng thể.`,
  },
  {
    src: "https://www.thmilk.vn/wp-content/uploads/2020/09/NUT-hat-va-nghe-800.png",
    alt: "Sữa Hạt và Nghệ TH true NUT 180 ml",
    price: "49.000",
    detailImg:
      "https://www.thmilk.vn/wp-content/uploads/2020/09/NUT-loc-hat-va-nghe-800.png",
    detailName: "LỐC SỮA HẠT VÀ NGHỆ TH TRUE NUT 180 ML X 4 HỘP",
    ingredients: `Dịch hạt óc chó và mắc ca (50%), sữa bò tươi, chà là (5,5%), dịch yến mạch, gấc puree (1,5%), chất ổn định (418, 471, 410). KHÔNG sử dụng chất bảo quản.`,
    nutrition: `Năng lượng (34,5 kcal), Hydrat cacbon (4,5 g), Chất đạm (0,75
      g), Chất béo (1,5 g)`,
    benefit: `Cung cấp chất chống oxy hóa cho mọi lứa tuổi, hỗ trợ làm chậm quá trình lão hóa, làm đẹp da. Tốt cho sức khỏe mắt, tốt cho sức khỏe tim mạch. Omega-3,6,9 và các vitamin, khoáng chất trong hạt óc chó, hạt mắc ca rất tốt cho sức khoẻ tổng thể.`,
  },
  {
    src: "https://www.thmilk.vn/wp-content/uploads/2019/11/NUT-1L-oc-cho-800.png",
    alt: "Sữa Hạt Óc Chó TH true NUT 1 L",
    price: "54.000",
    detailImg:
      "https://www.thmilk.vn/wp-content/uploads/2019/11/NUT-1L-oc-cho-800.png",
    detailName: "SỮA HẠT ÓC CHÓ TH TRUE NUT 1 L",
    ingredients: `Dịch hạt óc chó (60%), dịch yến mạch, sữa bò tươi, chà là (5%), chất ổn định (418, 471, 410) KHÔNG sử dụng chất bảo quản.`,
    nutrition: `Năng lượng (40,5 kcal), Hydrat cacbon (4,4 g), Chất đạm (1
      g), Chất béo (2,1 g)`,
    benefit: `Tốt cho tim mạch, tốt cho não bộ, làm chậm quá trình lão hóa.`,
  },
  {
    src: "https://www.thmilk.vn/wp-content/uploads/2019/11/NUT-1L-macca-800.png",
    alt: "Sữa Hạt Macca TH true NUT 1 L",
    price: "54.000",
    detailImg:
      "https://www.thmilk.vn/wp-content/uploads/2019/11/NUT-1L-macca-800.png",
    detailName: `SỮA HẠT MẮC CA TH TRUE NUT 1 L`,
    ingredients: `
    Dịch hạt mắc ca (60%), dịch yến mạch, sữa bò tươi, chà là (5%), chất ổn định (418, 471, 410). KHÔNG sử dụng chất bảo quản.`,
    nutrition: `Năng lượng (39,8 kcal), Hydrat cacbon (4,2 g), Chất đạm (0,8
      g), Chất béo (2,2 g)`,
    benefit: `Tốt cho tim mạch, tốt cho sức khỏe.`,
  },
  {
    src: "https://www.thmilk.vn/wp-content/uploads/2019/11/NUT-1L-hanh-nhan-800.png",
    alt: "Sữa Hạt Hạnh Nhân TH true NUT 1 L",
    price: "54.000",
    detailImg:
      "https://www.thmilk.vn/wp-content/uploads/2019/11/NUT-1L-hanh-nhan-800.png",
    detailName: `SỮA HẠT HẠNH NHÂN TH TRUE NUT 1 L`,
    ingredients: `
    Dịch hạt hạnh nhân (60%), dịch yến mạch, sữa bò tươi, chà là (5%), chất ổn định (418, 471, 410). KHÔNG sử dụng chất bảo quản.`,
    nutrition: `Năng lượng (35,5 kcal), Hydrat cacbon (4,4 g), Chất đạm (1,1
      g), Chất béo (1,5 g)`,
    benefit: `Tốt cho sức khỏe tim mạch, tốt cho não bộ, tốt cho da cung cấp các dưỡng chất có lợi cho sức khỏe.`,
  },
];
// const almondBreezeProducts = [
//   {
//     brand: "almond-breeze",
//     origin: "Mỹ",
//     expired: `9 tháng kể từ ngày sản xuất`,
//     src: "Image/NUT-gao-lut-do-800.png",
//     alt: "Sữa Hạt và Gạo Lứt Đỏ TH true NUT 180 ml",
//     price: "49.000",
//     detailImg: "Image/nut_loc_gao_lut_do_800_2_.jpg",
//     detailName: "LỐC SỮA HẠT VÀ GẠO LỨT ĐỎ TH TRUE NUT 180 ML X 4 HỘP",
//     ingredients: `Dịch hạt óc chó và mắc ca (50%), sữa bò tươi, dịch gạo lứt
//     đỏ (12,8%), chà là (5%), dịch yến mạch, chất ổn định (418,
//     471, 410). KHÔNG sử dụng chất bảo quản.`,
//     nutrition: `Năng lượng (53,3 kcal), Hydrat cacbon (9 g), Chất đạm (1,4
//       g), Chất béo (1,3 g)`,
//     taste: `Sản phẩm có vị thanh ngọt tự nhiên từ quả Chà Là - với vị ngọt tự nhiên, hàm lượng béo và chỉ số đường huyết thấp, đồng thời giàu selen, kali, sắt và chất chống oxi hóa.`,
//     benefit: `Omega-3,6,9 và
//     các vitamin, khoáng chất trong hạt óc chó, hạt mắc ca rất tốt
//     cho sức khoẻ tổng thể.`,
//   },
//   {
//     src: "Image/NUT-Macca-800.png",
//     alt: "Sữa Hạt Macca TH true NUT 180 ml",
//     price: "49.000",
//     detailImg: "Image/nut_loc_macca_800_2_.jpg",
//     detailName: "LỐC SỮA HẠT MẮC CA TH TRUE NUT 180 ML X 4 HỘP",
//     ingredients: `Dịch hạt mắc ca (60%), dịch yến mạch, sữa bò tươi, chà là (5%), chất ổn định (418, 471, 410). KHÔNG sử dụng chất bảo quản.`,
//     nutrition: `Năng lượng (39,8 kcal), Hydrat cacbon (4,2 g), Chất đạm (0,8
//       g), Chất béo (2,2 g)`,
//     benefit: `Tốt cho tim mạch, tốt cho sức khỏe`,
//   },
//   {
//     src: "Image/NUT-oc-cho-800.png",
//     alt: "Sữa Hạt Óc Chó TH true NUT 180 ml",
//     price: "49.000",
//     detailImg: "Image/nut_loc_oc_cho_800_2_.jpg",
//     detailName: "LỐC SỮA HẠT ÓC CHÓ TH TRUE NUT 180 ML X 4 HỘP",
//     ingredients: `Dịch hạt óc chó (60%), dịch yến mạch, sữa bò tươi, chà là (5%), chất ổn định (418, 471, 410) KHÔNG sử dụng chất bảo quản.`,
//     nutrition: `Năng lượng (40,5 kcal), Hydrat cacbon (4,4 g), Chất đạm (1
//       g), Chất béo (2,1 g)`,
//     benefit: `Tốt cho tim mạch, tốt cho não bộ, làm chậm quá trình lão hóa`,
//   },
//   {
//     src: "Image/NUT-hanh-nhan-800.png",
//     alt: "Sữa Hạt Hạnh Nhân TH true NUT 180 ml",
//     price: "49.000",
//     detailImg: "Image/nut_loc_hanh_nhan_800_2_.jpg",
//     detailName: "LỐC SỮA HẠT HẠNH NHÂN TH TRUE NUT 180 ML X 4 HỘP",
//     ingredients: `Dịch hạt hạnh nhân (60%), dịch yến mạch, sữa bò tươi, chà là (5%), chất ổn định (418, 471, 410) KHÔNG sử dụng chất bảo quản.`,
//     nutrition: `Năng lượng (35,5 kcal), Hydrat cacbon (4,4 g), Chất đạm (1,1
//       g), Chất béo (1,5 g)`,
//     benefit: `Tốt cho sức khỏe tim mạch, tốt cho não bộ, tốt cho da, cung cấp các dưỡng chất có lợi cho sức khỏe`,
//   },
//   {
//     src: "Image/NUT-hat-va-gac-800.png",
//     alt: "Sữa Hạt và Gấc TH true NUT 180 ml",
//     price: "49.000",
//     detailImg: "Image/nut_loc_hat_va_gac_800_2_.jpg",
//     detailName: "LỐC SỮA HẠT VÀ GẤC TH TRUE NUT 180 ML X 4 HỘP",
//     ingredients: `Dịch hạt óc chó và mắc ca (50%), sữa bò tươi, chà là (5,5%), dịch yến mạch, gấc puree (1,5%), chất ổn định (418, 471, 410). KHÔNG sử dụng chất bảo quản.`,
//     nutrition: `Năng lượng (34,5 kcal), Hydrat cacbon (4,5 g), Chất đạm (0,75
//       g), Chất béo (1,5 g)`,
//     benefit: `Cung cấp chất chống oxy hóa cho mọi lứa tuổi, hỗ trợ làm chậm quá trình lão hóa, làm đẹp da. Tốt cho sức khỏe mắt, tốt cho sức khỏe tim mạch. Omega-3,6,9 và các vitamin, khoáng chất trong hạt óc chó, hạt mắc ca rất tốt cho sức khoẻ tổng thể.`,
//   },
//   {
//     src: "Image/NUT-hat-va-nghe-800.png",
//     alt: "Sữa Hạt và Nghệ TH true NUT 180 ml",
//     price: "49.000",
//     detailImg: "Image/nut_loc_hat_va_nghe_800_2_.jpg",
//     detailName: "LỐC SỮA HẠT VÀ NGHỆ TH TRUE NUT 180 ML X 4 HỘP",
//     ingredients: `Dịch hạt óc chó và mắc ca (50%), sữa bò tươi, chà là (5,5%), dịch yến mạch, gấc puree (1,5%), chất ổn định (418, 471, 410). KHÔNG sử dụng chất bảo quản.`,
//     nutrition: `Năng lượng (34,5 kcal), Hydrat cacbon (4,5 g), Chất đạm (0,75
//       g), Chất béo (1,5 g)`,
//     benefit: `Cung cấp chất chống oxy hóa cho mọi lứa tuổi, hỗ trợ làm chậm quá trình lão hóa, làm đẹp da. Tốt cho sức khỏe mắt, tốt cho sức khỏe tim mạch. Omega-3,6,9 và các vitamin, khoáng chất trong hạt óc chó, hạt mắc ca rất tốt cho sức khoẻ tổng thể.`,
//   },
//   {
//     src: "Image/NUT-1L-oc-cho-800.png",
//     alt: "Sữa Hạt Óc Chó TH true NUT 1 L",
//     price: "54.000",
//     detailImg: "Image/nut_1l_oc_cho_800_2_.jpg",
//     detailName: "SỮA HẠT ÓC CHÓ TH TRUE NUT 1 L",
//     ingredients: `Dịch hạt óc chó (60%), dịch yến mạch, sữa bò tươi, chà là (5%), chất ổn định (418, 471, 410) KHÔNG sử dụng chất bảo quản.`,
//     nutrition: `Năng lượng (40,5 kcal), Hydrat cacbon (4,4 g), Chất đạm (1
//       g), Chất béo (2,1 g)`,
//     benefit: `Tốt cho tim mạch, tốt cho não bộ, làm chậm quá trình lão hóa.`,
//   },
//   {
//     src: "Image/NUT-1L-macca-800.png",
//     alt: "Sữa Hạt Macca TH true NUT 1 L",
//     price: "54.000",
//     detailImg: "Image/nut_1l_macca_800_2_.jpg",
//     detailName: `SỮA HẠT MẮC CA TH TRUE NUT 1 L`,
//     ingredients: `
//     Dịch hạt mắc ca (60%), dịch yến mạch, sữa bò tươi, chà là (5%), chất ổn định (418, 471, 410). KHÔNG sử dụng chất bảo quản.`,
//     nutrition: `Năng lượng (39,8 kcal), Hydrat cacbon (4,2 g), Chất đạm (0,8
//       g), Chất béo (2,2 g)`,
//     benefit: `Tốt cho tim mạch, tốt cho sức khỏe.`,
//   },
//   {
//     src: "Image/NUT-1L-hanh-nhan-800.png",
//     alt: "Sữa Hạt Hạnh Nhân TH true NUT 1 L",
//     price: "54.000",
//     detailImg: "Image/nut_1l_hanh_nhan_800_2_.jpg",
//     detailName: `SỮA HẠT HẠNH NHÂN TH TRUE NUT 1 L`,
//     ingredients: `
//     Dịch hạt hạnh nhân (60%), dịch yến mạch, sữa bò tươi, chà là (5%), chất ổn định (418, 471, 410). KHÔNG sử dụng chất bảo quản.`,
//     nutrition: `Năng lượng (35,5 kcal), Hydrat cacbon (4,4 g), Chất đạm (1,1
//       g), Chất béo (1,5 g)`,
//     benefit: `Tốt cho sức khỏe tim mạch, tốt cho não bộ, tốt cho da cung cấp các dưỡng chất có lợi cho sức khỏe.`,
//   },
// ];

/* ---------------------
    MARKUP FUNCTION
----------------------*/
const markup = function (prd, i, rate) {
  return `
    <li class="product flex-column" style="transform: translate(${
      i * rate === 0 ? -1 : i * rate
    }%, -50%)">
        <img
        src=${prd.src}
        alt=${prd.alt}
        class="product-img"
        />
        <p class="product-name">${prd.alt}</p>
        <p class="product-price">${prd.price} &#8363;</p>
        <button class="btn product-btn">Chi tiết</button>
    </li>
  `;
};

const detailedMarkup = function (products, prd) {
  return `
    <img
    src="${prd.detailImg}"
    alt="${prd.detailName}"
    class="detail-img"
    />
    <div class="detail-list">
      <h3 class="detail-name">
        ${prd.detailName}
      </h3>
      <p class="detail-price">${prd.price} &#8363;</p>
      <div class="detail-infors">
        <p class="detail-infor">Xuất xứ</p>
        <p>${products[0].origin}</p>
        <p class="detail-infor">Thành phần</p>
        <p>
          ${prd.ingredients}
        </p>
        <p class="detail-infor">Dinh dưỡng ${
          products[0].brand === "th-true-milk" ? "trong 100ml" : ""
        }</p>
        <p>
          ${prd.nutrition}
        </p>
        <p class="detail-infor">Hạn sử dụng</p>
        <p>${products[0].expired}</p>
      </div>
    </div>
    <ul class="detail-benefit flex-column">
      <li>
      ${products[0].taste}
      </li>
      <li>
        ${prd.benefit}
      </li>
    </ul>
  `;
};

/* ---------------------
  LOAD PRODUCTS FUNCTION
----------------------*/
const loadProducts = function (products) {
  const brand = document.querySelector(`.${products[0].brand}`);
  products.forEach(function (prd, i) {
    brand.insertAdjacentHTML("beforeend", markup(prd, i, 125));

    const productBtn = brand
      .querySelectorAll(".product")
      [i].querySelector(".product-btn");

    productBtn.addEventListener("click", function (e) {
      const markup = detailedMarkup(products, prd);
      const target = e.target
        .closest(".brand-products")
        .querySelector(".detail-container");

      target.innerHTML = "";
      target.insertAdjacentHTML("beforeend", markup);
    });
  });
};
window.addEventListener("load", function () {
  loadProducts(thTrueMilkProducts);
});

/* ---------------------
    SLIDER FUNCTION
----------------------*/
(function () {
  let moveClick = 0;

  const moveLeft = function (products, rate, y = 0) {
    if (!moveClick) return;
    moveClick--;
    products.forEach((prd, i) => {
      prd.style.transform = `translate(${
        (i - moveClick) * rate === 0 ? -1 : (i - moveClick) * rate
      }%, -${y}%)`;
    });
  };

  const moveRight = function (products, rate, num = 1, y = 0) {
    if (moveClick === products.length - num) {
      return;
    }
    moveClick++;
    products.forEach((prd, i) => {
      prd.style.transform = `translate(${
        (i - moveClick) * rate === 0 ? -1 : (i - moveClick) * rate
      }%, -${y}%)`;
    });
  };

  sectionProducts.addEventListener("click", function (e) {
    if (
      !e.target.closest(".move-left-btn") &&
      !e.target.closest(".move-right-btn")
    ) {
      return;
    }

    if (e.target.closest(".move-left-btn")) {
      const products = e.target
        .closest(".move-left-btn")
        .nextElementSibling.querySelectorAll(".product");
      moveLeft(products, 125, 50);
    }
    if (e.target.closest(".move-right-btn")) {
      const products = e.target
        .closest(".move-right-btn")
        .previousElementSibling.querySelectorAll(".product");

      if (window.innerWidth <= 500) moveRight(products, 125, 1, 50);
      else if (window.innerWidth <= 800) moveRight(products, 125, 2, 50);
      else {
        console.log("hello");
        moveRight(products, 125, 3, 50);
      }
    }
  });

  const testimonials = testsContainer.querySelectorAll(".testimonial");

  testsContainer.addEventListener("click", function (e) {
    if (!e.target.closest(".testimonial-btn")) return;

    if (e.target.closest(".testimonial-left")) {
      moveLeft(testimonials, 100);
    }
    if (e.target.closest(".testimonial-right")) {
      moveRight(testimonials, 100);
    }
  });
})();

/* --------------------------
  CLICK TRANGCHU FUNCTION
-------------------------- */
document.querySelector(".hero-btn-product").addEventListener("click", (e) => {
  e.preventDefault();

  sectionProducts.scrollIntoView({ behavior: "smooth" });
});

document.querySelector(".hero-btn-learnmore").addEventListener("click", (e) => {
  e.preventDefault();

  const sectionTestimonial = document.querySelector(".section-testimonial");
  sectionTestimonial.scrollIntoView({
    behavior: "smooth",
    block: "end",
    inline: "nearest",
  });
});

/* -------------------------
    CLICK ON NAVIGATION
------------------------- */
const sectionsNodeList = document.querySelectorAll("section");
const sectionsArr = Array.from(sectionsNodeList);
const sections = sectionsArr.filter((_, i) => {
  return i !== 0;
});
sections.push(document.querySelector("footer"));

const headerNavBtnsNodeList = document.querySelectorAll(".header-nav-btn");
const headerNavBtns = Array.from(headerNavBtnsNodeList);

headerNavBtns.forEach((btn, i) => {
  btn.addEventListener("click", function (e) {
    sections[i].scrollIntoView({
      behavior: "smooth",
    });

    if (header.classList.contains("nav-open")) {
      menuIcon.classList.remove("hidden");
      closeIcon.classList.add("hidden");
      header.classList.remove("nav-open");
      document.body.style.overflowY = "scroll";
    }
  });
});

/*----------------------------------
      STICKY NAVIGATION
----------------------------------*/
const heroSection = document.querySelector(".section-hero");
const header = document.querySelector(".header");
const headerHeight = header.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) {
    header.classList.add("sticky");
  } else header.classList.remove("sticky");
};

const heroObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `${headerHeight}px`,
});

heroObserver.observe(heroSection);

/* ----------------------
  CLICK ON MENU BUTTON
-----------------------*/
document.querySelector(".menu-btn").addEventListener("click", function (e) {
  if (menuIcon.classList.contains("hidden")) {
    menuIcon.classList.remove("hidden");
    closeIcon.classList.add("hidden");
    header.classList.remove("nav-open");
    document.body.style.overflowY = "scroll";
  } else {
    closeIcon.classList.remove("hidden");
    menuIcon.classList.add("hidden");
    header.classList.add("nav-open");
    document.body.style.overflowY = "hidden";
  }
});

/* ----------------------
        BLOG
-----------------------*/
const blogsContainer = document.querySelector(".blogs-container");

const cardMarkup = function (
  firstImg,
  href,
  postHeading,
  postDescription,
  blogDescription
) {
  return `
    <div class="card">
        <div class="blog-img-container">
            <img
                src=${firstImg}
                alt="Blog"
                class="blog-img"
            />
        </div>
        <div class="blog">
            <a href=${href} class="blog-title">
                ${postHeading}
            </a>
            <p class="blog-date">${postDescription}</p>
            <p class="blog-description">
                ${blogDescription}
            </p>
        </div>
    </div>
    `;
};

blogposts.forEach((blog) => {
  const { postHeading, href, postDescription, firstImg, blogDescription } =
    blog;
  blogsContainer.insertAdjacentHTML(
    "beforeend",
    cardMarkup(firstImg, href, postHeading, postDescription, blogDescription)
  );
});
