function sellProduct() {
    const productName = document.getElementById('productName').value;
    const productPrice = document.getElementById('productPrice').value;
  
    if (productName && productPrice) {
      const productList = document.getElementById('productList');
      const productDiv = document.createElement('div');
      productDiv.className = 'product';
      productDiv.innerHTML = `<h3>${productName}</h3><p>Price: $${productPrice}</p>`;
      productList.appendChild(productDiv);
  
      // Additional logic to save data to the server or a database would go here
  
      // Clear the form
      document.getElementById('sellForm').reset();
    } else {
      alert('Please fill in all fields');
    }
  }
  