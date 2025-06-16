describe("Detalii Contract Step", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/contract");

    // Step 1 - Vânzător
    cy.get('[name="Nume/denumire vanzator"]').type("Ion Popescu");
    cy.get('[name="Judet vanzator"]').type("Cluj");
    cy.get('[name="Municipiu/oras/comuna vanzator"]').type("Cluj-Napoca");
    cy.get('[name="Sat/sector vanzator"]').type("Centru");
    cy.get('[name="Str vanzator"]').type("Str. Libertății");
    cy.get('[name="Serie CI vanzator"]').type("AB");
    cy.get('[name="Nr CI vanzator"]').type("123456");
    cy.contains("Continuă").click();

    // Step 2 - Cumpărător
    cy.get('[name="Nume/denumire cumparator"]').type("Maria Ionescu");
    cy.get('[name="Judet cumparator"]').type("București");
    cy.get('[name="Municipiu/oras/comuna cumparator"]').type("Sector 3");
    cy.get('[name="Sat/sector cumparator"]').type("Titan");
    cy.get('[name="Str cumparator"]').type("Bd. Basarabiei");
    cy.get('[name="Serie CI cumparator"]').type("BZ");
    cy.get('[name="Nr CI cumparator"]').type("987654");
    cy.contains("Continuă").click();

    // Step 3 - Obiect contract
    cy.get('[name="Marca mijlocului de transport"]').type("Dacia");
    cy.get('[name="Tipul mijlocului de transport"]').type("Logan");
    cy.get('[name="Nr identificare al mijlocului de transport"]').type("VF1BB1L0H00000000");
    cy.get('[name="Seria motorului mijlocului de transport"]').type("K7M123456");
    cy.get('[name="Capacitatea cilindrica a motorului mijlocului de transport"]').type("1390");
    cy.get('[name="Greutatea maxima admisa a remorcii/semiremorcii"]').type("1500");
    cy.get('[name="Nr de inmatriculare/inregistrare al mijlocului de transport"]').type("B123XYZ");
    cy.get('[name="Seria nr. CIV"]').type("456789");
    cy.get('[name="An de fabricatie"]').type("2018");
    cy.get('[name="Norma euro"]').type("6");
    cy.contains("Continuă").click();
  });

  it("completes DetaliiContract step", () => {
    cy.contains("4. Preț și detalii contract").should("exist");

    cy.get('[name="Locul incheierii"]').type("București");
    cy.get('[name="Pret (litere)"]').type("cinci mii lei");
    cy.get('[name="Pret (cifre)"]').type("5000");
    cy.get('[name="Data incheierii"]').type("01.07.2025");
    cy.get('[name="Anexe NU"]').type("Nu");

    // cy.contains("Trimite").click();
  });
});



