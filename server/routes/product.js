const express = require("express");
const router = express.Router();
const mysql = require("../mysql");

router.get("/supplier", async (req, res) => {
  const supplierList = await mysql.query("supplierList");
  res.send(supplierList);
});

router.get("/category", async (req, res) => {
  const categoryList = await mysql.query("categoryList");
  res.send(categoryList);
});

// 해당 검색문자열이 category_name 에 포함된 리스트 찾기
router.get("/category/name/:search", async (req, res) => {
  const { search } = req.params;
  const categoryList = await mysql.query("categoryListByName", search);
  res.send(categoryList);
});

router.get("/category/:product_category_id", async (req, res) => {
  const { product_category_id } = req.params;
  const categoryList = await mysql.query("categoryDetail", product_category_id);
  res.send(categoryList);
});

router.post("/category", async (req, res) => {
  const result = await mysql.query("categoryInsert", req.body.param);
  res.send(result);
});

router.put("/category/:product_category_id", async (req, res) => {
  const { product_category_id } = req.params;
  const result = await mysql.query("categoryUpdate", [
    req.body.param,
    product_category_id,
  ]);
  res.send(result);
});

router.delete("/category/:product_category_id", async (req, res) => {
  const { product_category_id } = req.params;
  const count = await mysql.query("productCount", product_category_id);
  if (count[0] === 0) {
    const result = await mysql.query("categoryDelete", product_category_id);
    res.send(result);
  } else {
    res.send({ status: 501, count: count[0] });
  }
});

module.exports = router;
