export const fetchBenches = success => {
  $.ajax({
    url: "/api/benches",
    type: 'GET',
    success,
    error: e => console.log(e)
  })
};

