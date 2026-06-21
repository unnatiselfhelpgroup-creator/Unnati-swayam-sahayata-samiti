window.generateIDCardPDF = async function (data) {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF("landscape", "mm", [54, 86]);
    doc.text("ID Card", 43, 10, { align: "center" });
    doc.text(`नाम: ${data.name}`, 5, 20);
    doc.text(`पद: ${data.designation}`, 5, 30);
    doc.save(`${data.name}-ID.pdf`);
};
