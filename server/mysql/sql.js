module.exports = {
  // supplier
  supplierList: `select * from product_supplier`,
  supplierListByName: `select * from product_supplier where supplier_name like ?`,
  supplierDetail: `select * from product_supplier where product_supplier_id=?`,
  supplierInsert: `insert into product_supplier set ?`,
  supplierUpdate: `update product_supplier set ? where product_supplier_id=?`,
  supplierDelete: `delete from product_supplier where product_supplier_id=?`,

  // category
  categoryList: `select * from product_category`,
  categoryListByName: `select * from product_category where category_name like ?`,
  categoryDetail: `select * from product_category where product_category_id=?`,
  categoryInsert: `insert into product_category set ?`,
  categoryUpdate: `update product_category set ? where product_category_id=?`,
  categoryDelete: `delete from product_category where product_category_id=?`,
  imageInsert: `insert into product_image set ?`,
  productCount: `select count(*) as count from product where product_category_id=?`,
};
