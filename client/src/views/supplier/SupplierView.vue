<template>
  <table class="table table-striped table-bordered">
    <thead>
      <tr>
        <th>ID</th>
        <th>공급처이름</th>
        <th>대표번호</th>
        <th>주소</th>
        <th>연락처</th>
        <th>연락처번호</th>
        <th>연락처이메일</th>
      </tr>
    </thead>
    <tbody>
      <tr :key="item.product_supplier_id" v-for="item in list">
        <td>{{ item.product_supplier_id }}</td>
        <td>{{ item.supplier_name }}</td>
        <td>{{ item.phone }}</td>
        <td>{{ item.address }}</td>
        <td>{{ item.contact_name }}</td>
        <td>{{ item.contact_phone }}</td>
        <td>{{ item.contact_email }}</td>
        <td>
          <button
            class="btn btn-success me-1"
            data-bs-toggle="modal"
            data-bs-target="#supplierModal"
            @click="openModal(item.product_supplier_id)"
          >
            수정</button
          ><button
            class="btn btn-danger me-1"
            @click="doDelete(item.product_supplier_id)"
          >
            삭제
          </button>
          <button
            class="btn btn-warning"
            @click="
              changeStatus(
                item.product_supplier_id,
                item.active_yn === 'Y' ? 'N' : 'Y'
              )
            "
          >
            {{ item.active_yn === 'Y' ? '사용중지' : '사용' }}
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
// supplier
export default {
  data() {
    return {
      headers: [
        { title: 'ID', key: 'product_supplier_id' },
        { title: 'Name', key: 'supplier_name' },
        { title: 'Phone', key: 'phone' },
        { title: 'Address', key: 'address' }
      ],
      list: [],
      searchName: '',
      selectedItem: {
        product_supplier_id: -1,
        supplier_name: ''
      }
    }
  },
  async mounted() {
    this.list = await this.$get('/api/product/supplier')
  },
  doDelete(id) {
    this.$swal({
      title: '공급처를 정말 삭제 하시겠습니까?',
      text: '삭제된 데이터는 복원되지 않습니다.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: '취소',
      confirmButtonText: '삭제'
    }).then(async (result) => {
      if (result.isConfirmed) {
        const loader = this.$loading.show({ canCancel: false })

        const r = await this.$delete(`/api/product/supplier/${id}`)
        console.log(r)

        loader.hide()

        if (r.status === 200) {
          this.$swal('공급처가 삭제 되었습니다.')
          this.getList()
        } else if (r.status === 501) {
          this.$swal(
            `삭제하려는 공급처를 사용하는 제품이 ${r.count}건 존재합니다.`
          )
        }
      }
    })
  }
}
</script>

<style></style>
