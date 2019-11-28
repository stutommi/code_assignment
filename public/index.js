$(document).ready(() => {
  // Handles sum-operation
  $('#sum-input').keyup(function () {
    const input = $(this).val()

    if (!input) return $('#sum-result').empty()

    const valueArray = input
      .split(',')
      .map(n => n.trim())

    if (valueArray[valueArray.length - 1] === '') valueArray.pop()

    $.ajax({
      type: 'GET',
      url: '/api/sum',
      data: { numbers: valueArray },
      error: xhr => $('#sum-result').html(`<span>${xhr.responseJSON.error}</span>`),
      success: res => $('#sum-result').html(`<span>Sum is ${res.result}, which is \
      ${res.isPrime ? '' : 'not'} a prime number! </span>`)
    })
  })

  // Handles prime-operation
  $('#prime-input').keyup(function () {
    const input = $(this).val()
      .trim()

    if (!input) return $('#prime-result').empty()

    $.ajax({
      type: 'GET',
      url: `/api/is-prime/${input}`,
      error: xhr => $('#prime-result').html(`<span>${xhr.responseJSON.error}</span>`),
      success: res => $('#prime-result').html(`<span>The number above is \
      ${res.isPrime ? '' : 'not'} a prime number!</span>`)
    })
  })
})