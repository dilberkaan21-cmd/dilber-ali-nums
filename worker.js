export default {
  async fetch(request) {
    return new Response(
      "Dilber Ali Nums Server Running ✅",
      {
        headers: {
          "content-type": "text/plain"
        }
      }
    );
  }
};