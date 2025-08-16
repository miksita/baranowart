 document.getElementById('bidForm').addEventListener('submit', function (e) {
        e.preventDefault();
        bootstrap.Modal.getInstance(document.getElementById('bidModal')).hide();
        new bootstrap.Modal(document.getElementById('successModal')).show();
    });