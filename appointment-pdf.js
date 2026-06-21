window.generateAppointmentPDF = function (data) {
    const element = document.createElement('div');
    element.innerHTML = `<h1>नियुक्ति पत्र: ${data.name}</h1><p>पद: ${data.designation}</p>`;
    const opt = { margin: 5, filename: `${data.name}-Appointment.pdf`, image: { type: 'jpeg', quality: 0.98 }, html2canvas: { scale: 2 }, jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' } };
    html2pdf().set(opt).from(element).save();
};
