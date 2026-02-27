// Form handling with Web3Forms
async function handleSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    const statusDiv = document.getElementById('formStatus');
    const submitBtn = document.getElementById('submitBtn');
    
    if (!submitBtn) return;
    
    submitBtn.disabled = true;
    submitBtn.textContent = 'Pošiljam...';
    if (statusDiv) {
        statusDiv.className = 'form-status';
        statusDiv.style.display = 'none';
    }
    
    try {
        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData
        });
        
        const data = await response.json();
        
        if (statusDiv) {
            if (data.success) {
                statusDiv.className = 'form-status success';
                statusDiv.textContent = '✓ Sporočilo uspešno poslano! Odgovorili vam bomo v najkrajšem času.';
                statusDiv.style.display = 'block';
                form.reset();
            } else {
                statusDiv.className = 'form-status error';
                statusDiv.textContent = '✗ Napaka pri pošiljanju. Prosimo poskusite ponovno ali nas kontaktirajte direktno.';
                statusDiv.style.display = 'block';
            }
        }
    } catch (error) {
        if (statusDiv) {
            statusDiv.className = 'form-status error';
            statusDiv.textContent = '✗ Napaka pri pošiljanju. Preverite internetno povezavo.';
            statusDiv.style.display = 'block';
        }
    } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Pošlji sporočilo';
    }
}
