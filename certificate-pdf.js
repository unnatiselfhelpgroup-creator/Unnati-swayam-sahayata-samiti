window.generateCertificatePDF = async function (data) {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF("landscape");
    doc.text("अनुभव प्रमाण पत्र", 100, 50, { align: "center" });
    doc.text(`नाम: ${data.name}`, 20, 70);
    doc.save(`${data.name}-Certificate.pdf`);
};
