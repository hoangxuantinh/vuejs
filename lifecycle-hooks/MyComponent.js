export default {
  template: `<div id="message">This is the component with name {{ myComponent  }} </div>`,
  data() {
    return {
      myComponent: "My Component",
    };
  },
  // được gọi trước khi component được mount vào DOM
  // các use case: gọi api lấy dữ liệu từ server, khởi tạo websocket, ...
  beforeMount() {
    console.log("Component on before mount");
    // ví dụ ở đây access vào dom thật sẽ bị lỗi (document.getElementById)
    console.log(document.getElementById("message").innerText);
  },

  /* 
    - Hook này được gọi ngay sau khi component được mount vào DOM
    - onMounted ở Vue giống như componentDidMount hoặc useEffect({...}, []) ở bên React
    - Nên fetch API ở onBeforeMount thay vì onMounted là vì, API là thứ không liên quan tới component,
    nên ta có thể fetch càng sớm càng tốt, chuẩn bị sẵn data, khi component mounted thì data đã có sẵn ở đó rồi
    
    Ứng dụng thực tiễn: 
      - Khởi tạo thư viện bên thứ ba như chart hoặc slider.
      - Dùng các thao tác với DOM thật: document.getElementById/document.querySelector, hoặc dùng JQuery
  */
  mounted() {
    console.log("MyComponent has been mounted");
    console.log(document.getElementById("message").innerText);
  },

  /*
    Hook này được gọi trước khi component cập nhật lại do thay đổi reactive data 
    (ví dụ khi ta update giá trị của ref()/reactive()
  */
  beforeUpdate() {
    console.log("Component On Before Update");
    console.log(document.getElementById("message").innerText);
  },

  /*
    DOM đã được cập nhật
    Ứng dụng của onUpdated mình thấy thường là:
      + Đồng bộ hóa dữ liệu giữa DOM và các thư viện bên thứ ba
      + Thực hiện các thao tác sau khi DOM đã được cập nhật: ví dụ ta có danh sách message, 
        thêm mới message -> DOM thật update -> scroll xuống dưới cuối
   */
  updated() {
    console.log("Component On Update");
    console.log(document.getElementById("message").innerText);
  },

  /* Hook này được gọi trước khi component bị hủy (unmount) khỏi DOM
      Ở thời điểm này component vẫn hoạt động như bình thường không có gì bị mất
      và ta vẫn có thể truy cập vào DOM thật của component
   */
  beforeUnmount() {
    console.log("Component On Before Unmount");
    console.log(document.getElementById("message").innerText);
  },

  /**
     Nếu ta cố gắng truy cập vào DOM ở thời điểm này sẽ gặp lỗi
     Ứng dụng thực tiễn:
      + Dọn dẹp tài nguyên như setTimeout/setInterval hoặc listener (ví dụ window.onscroll)
      + Hủy kết nối WebSocket hoặc API.
   */
  unmounted() {
    console.log("Component On Unmounted");
    console.log(document.getElementById("message").innerText);
  },


  /** 
   * Hook này được đặt ở component cha để bắt các lỗi mà component con gặp phải
   * Ví dụ thực tế của hook này là dùng làm ErrorBoundary, 
   * rất hữu ích, để đảm bảo app của chúng ta không bị crash và user không bao giờ phải thấy màn hình trắng
  */
  errorCaptured: (err, vm, info) => {
    console.log("Component On errorCaptured");
  },


  /** 
   * Hook này được gọi khi một component cached bởi <keep-alive> được kích hoạt và thêm vào DOM.
    <KeepAlive>
      <Test />
    </KeepAlive>
  */
  activated() {
    console.log("Component On activated");
  },

  /**
   * Hook này được gọi khi một component cached bởi <keep-alive> bị "hủy kích hoạt" và xoá khỏi DOM
   */
  deactivated() {
    
  },
};
