// cypress/integration/contract.spec.js

describe("Contract Flow", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/contract");

    // Step 1 – Vanzator
    cy.get('[name="sellerName"]').type("Ion Popescu");
    cy.get('[name="sellerCountry"]').type("Romania");
    cy.get('[name="sellerCounty"]').type("Cluj");
    cy.get('[name="sellerPostalCode"]').type("400000");
    cy.get('[name="sellerCity"]').type("Cluj-Napoca");
    cy.get('[name="sellerDistrict"]').type("Centru");
    cy.get('[name="sellerStreet"]').type("Str. Libertatii");
    cy.get('[name="sellerStreetNumber"]').type("10");
    cy.get('[name="sellerBlock"]').type("A");
    cy.get('[name="sellerStaircase"]').type("1");
    cy.get('[name="sellerFloor"]').type("2");
    cy.get('[name="sellerApartment"]').type("5");
    cy.get('[name="sellerIdSeries"]').type("AB");
    cy.get('[name="sellerIdNumber"]').type("123456");
    cy.get('[name="sellerCnpOrCif"]').type("1960101123456");
    cy.get('[name="sellerPhone"]').type("0712345678");
    cy.get('[name="sellerEmail"]').type("ion.popescu@example.com");

    // … your beforeEach() up through filling sellerEmail …

    // BEFORE toggling, extra fields shouldn’t exist:
    cy.get('[name="sellerLegalRepName"]').should('not.exist')
    cy.get('[name="sellerLegalRepIdSeries"]').should('not.exist')
    cy.get('[name="sellerFiscalCountry"]').should('not.exist')
 cy.contains("Aveți alt domiciliu?").click();
    cy.get('[name="sellerLegalRepName"]')
      .should("be.visible")
      .type("Ion Legal")
    cy.get('[name="sellerLegalRepIdSeries"]')
      .type("AB")
    cy.get('[name="sellerLegalRepIdNumber"]')
      .type("123456")
    cy.get('[name="sellerLegalRepCnp"]')
      .type("1960101123456")

    // 2️⃣ Tick “Sunteți reprezentat de altcineva?” and fill its required fields
    cy.contains("Sunteți reprezentat de altcineva?").click();
    cy.get('[name="sellerFiscalCounty"]')
      .should("be.visible")
      .type("Cluj")
    cy.get('[name="sellerFiscalCity"]')
      .type("Cluj-Napoca")
    cy.get('[name="sellerFiscalDistrict"]')
      .type("Centru")
    cy.get('[name="sellerFiscalStreet"]')
      .type("Str. Libertatii")

    // 3️⃣ Finally click to proceed
    cy.contains("Continuă").click();

    // Step 2 – Cumparator
    cy.get('[name="buyerName"]').type("Maria Ionescu");
    cy.get('[name="buyerCountry"]').type("Romania");
    cy.get('[name="buyerCounty"]').type("Bucuresti");
    cy.get('[name="buyerPostalCode"]').type("030000");
    cy.get('[name="buyerCity"]').type("Bucuresti");
    cy.get('[name="buyerDistrict"]').type("Sector 3");
    cy.get('[name="buyerStreet"]').type("Bd. Basarabiei");
    cy.get('[name="buyerStreetNumber"]').type("45");
    cy.get('[name="buyerBlock"]').type("B");
    cy.get('[name="buyerStaircase"]').type("2");
    cy.get('[name="buyerFloor"]').type("4");
    cy.get('[name="buyerApartment"]').type("12");
    cy.get('[name="buyerIdSeries"]').type("BZ");
    cy.get('[name="buyerIdNumber"]').type("987654");
    cy.get('[name="buyerCnpOrCif"]').type("2850505123456");
    cy.get('[name="buyerPhone"]').type("0723456789");
    cy.get('[name="buyerEmail"]').type("maria.ionescu@example.com");
    cy.contains("Continuă").click();

    // Step 3 – Obiectul contractului
    cy.get('[name="vehicleBrand"]').type("Dacia");
    cy.get('[name="vehicleModel"]').type("Logan");
    cy.get('[name="vehicleChassisNumber"]').type("VF1BB1L0H00000000");
    cy.get('[name="vehicleEngineSeries"]').type("K7M123456");
    cy.get('[name="vehicleCubicCapacity"]').type("1390");
    cy.get('[name="vehicleMaxWeight"]').type("1500");
    cy.get('[name="vehicleRegistrationNumber"]').type("B123XYZ");
    // optional ITP expiry:
    // cy.get('[name="vehicleItpExpiry"]').type("2025-12-31");
    cy.get('[name="vehicleCivSeries"]').type("456789");
    cy.get('[name="vehicleYear"]').type("2018");
    cy.get('[name="vehicleEuroNorm"]').type("6");
    // cy.get('[name="vehicleAcquisitionDate"]').type("2023-06-15");
    cy.get('[name="acquisitionDocument"]').type("Factura 123/2023");
    cy.contains("Continuă").click();
  });

  it("completes Detalii Contract step", () => {
    // verify we're on step 4
    // cy.contains("4. Preț și detalii contract").should("exist");

    cy.get('[name="priceDigits"]').type("5000");
    cy.get('[name="priceLetters"]').type("cinci mii lei");
    // cy.get('[name="anexeYes"]').type("Nu");
    cy.get('[name="contractPlace"]').type("Bucuresti");

    // submit if you have a "Trimite" button
    // cy.contains("Trimite").click();
  });
});
