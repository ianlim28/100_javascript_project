const btn = document.querySelector('.btn')
const coupon = document.querySelector('.coupon')

const copyText = (e) => {
    e.preventDefault();
    coupon.select();
    // document.execCommand('copy'); this is deprecated
    navigator.clipboard.writeText(coupon.value)
    .then(() => {
        console.log('Value copied to clipboard');
    })
    .catch(err => {
        console.log('Failed to copy value to clipboard')
    })
    btn.textContent = 'Copied!';
    setTimeout(() => {
        btn.textContent = "Copy";    
    }, 3000);
}

btn.addEventListener('click', copyText)