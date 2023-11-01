import React, { useState } from "react";

const PayPages = () => {
  const [selectedCard, setSelectedCard] = useState("type1");
  const [cardholder, setCardholder] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expirationMonth, setExpirationMonth] = useState("01");
  const [expirationYear, setExpirationYear] = useState("2020");
  const [securityCode, setSecurityCode] = useState("");

  const handleCardSelection = (e) => {
    setSelectedCard(e.target.id);
  };

  const handleSubmit = () => {
    // Add your submission logic here
  };

  const styles = {
    container: {
      minWidth: "100%",
      minHeight: "90vh",
      backgroundColor: "#e5e7eb",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "0 1rem",
    },
    cardContainer: {
      width: "100%",
      maxWidth: "600px",
      margin: "0 auto",
      padding: "1rem 1.25rem",
      backgroundColor: "white",
      boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)",
      borderRadius: "10px",
      color: "#333",
    },
    cardImageContainer: {
      width: "24vw",
      height: "20vh",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      margin: "0 auto",
      marginBottom: "-10px",
    },
    cardImageIcon: {
      fontSize: "30vw",
      color: "white",
    },
    header: {
      marginBottom: "1rem",
    },
    title: {
      textAlign: "center",
      fontWeight: "bold",
      fontSize: "1.5rem",
      textTransform: "uppercase",
    },
    cardTypeSelection: {
      display: "flex",
      margin: "-0.5rem",
    },
    cardType: {
      flex: "1",
      padding: "0.5rem",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
    },
    cardRadio: {
      width: "1rem",
      height: "1rem",
      marginRight: "0.5rem",
      border: "2px solid #667eea",
      borderRadius: "50%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    cardRadioSelected: {
      backgroundColor: "black",
      borderColor: "transparent",
    },
    cardImage: {
      width: "15rem",
      maxWidth: "100%", 
      height: "auto",
    },
    formField: {
      marginBottom: "1rem",
    },
    label: {
      fontWeight: "bold",
      fontSize: "0.875rem",
      marginBottom: "0.5rem",
      marginLeft: "0.25rem",
    },
    input: {
      width: "100%",
      padding: "0.5rem",
      border: "2px solid #e5e7eb",
      borderRadius: "5px",
      outline: "none",
      transition: "border-color 0.3s",
    },
    select: {
      width: "100%",
      padding: "0.5rem",
      border: "2px solid #e5e7eb",
      borderRadius: "5px",
      outline: "none",
      transition: "border-color 0.3s",
    },
    securityCode: {
      width: "4vw",
    },
    submitButton: {
      display: "block",
      width: "100%",
      maxWidth: "200px",
      margin: "0 auto",
      backgroundColor: "#667eea",
      color: "white",
      borderRadius: "5px",
      textAlign: "center",
      padding: "0.75rem",
      fontWeight: "bold",
      textDecoration: "none",
      boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)",
      cursor: "pointer",
      transition: "background-color 0.3s",
      textAlign: "center",
    },
    submitButtonHover: {
      backgroundColor: "black",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.cardContainer}>
        <div style={styles.cardImageContainer}>
          <i
            className="mdi mdi-credit-card-outline"
            style={styles.cardImageIcon}
          ></i>
        </div>
        <div style={styles.header}>
          <h1 style={styles.title}>Secure payment info</h1>
        </div>
        <div style={styles.cardTypeSelection}>
          <div style={styles.cardType}>
            <div
              style={{
                ...styles.cardRadio,
                ...(selectedCard === "type1" ? styles.cardRadioSelected : {}),
              }}
              onClick={() => handleCardSelection({ target: { id: "type1" } })}
            ></div>
            <img
              src="data:image/png;base64,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"
              alt="Card Type 1"
              style={styles.cardImage}
            />
          </div>
          <div style={styles.cardType}>
            <div
              style={{
                ...styles.cardRadio,
                ...(selectedCard === "type2" ? styles.cardRadioSelected : {}),
              }}
              onClick={() => handleCardSelection({ target: { id: "type2" } })}
            ></div>
            <img
              src="https://www.sketchappsources.com/resources/source-image/PayPalCard.png"
              alt="Card Type 2"
              style={styles.cardImage}
            />
          </div>
        </div>
        <div style={styles.formField}>
          <label style={styles.label}>Name on card</label>
          <input
            style={styles.input}
            placeholder="John Smith"
            type="text"
            value={cardholder}
            onChange={(e) => setCardholder(e.target.value)}
          />
        </div>
        <div style={styles.formField}>
          <label style={styles.label}>Card number</label>
          <input
            style={styles.input}
            placeholder="0000 0000 0000 0000"
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />
        </div>
        <div style={styles.formField}>
          <label style={styles.label}>Expiration date</label>
          <div>
            <select
              style={styles.select}
              value={expirationMonth}
              onChange={(e) => setExpirationMonth(e.target.value)}
            >
              <option value="01">01 - January</option>
              <option value="02">02 - February</option>
              <option value="03">03 - March</option>
              <option value="04">04 - April</option>
              <option value="05">05 - May</option>
              <option value="06">06 - June</option>
              <option value="07">07 - July</option>
              <option value="08">08 - August</option>
              <option value="09">09 - September</option>
              <option value="10">10 - October</option>
              <option value="11">11 - November</option>
              <option value="12">12 - December</option>
            </select>
          </div>
          <div>
            <select
              style={styles.select}
              value={expirationYear}
              onChange={(e) => setExpirationYear(e.target.value)}
            >
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
              <option value="2026">2026</option>
              <option value="2027">2027</option>
              <option value="2028">2028</option>
              <option value="2029">2029</option>
            </select>
          </div>
        </div>
        <div style={styles.formField}>
          <label style={styles.label}>Security code</label>
          <input
            style={{ ...styles.input, ...styles.securityCode }}
            placeholder="000"
            type="text"
            value={securityCode}
            onChange={(e) => setSecurityCode(e.target.value)}
          />
        </div>
        <div>
          <a
            href="/"
            style={{ ...styles.submitButton, ...styles.submitButtonHover }}
            onClick={handleSubmit}
          >
            <i className="mdi mdi-lock-outline"></i> PAY NOW
          </a>
        </div>
      </div>
    </div>
  );
};

export default PayPages;
