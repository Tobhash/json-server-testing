# Prompt dla GitHub Copilot - Generowanie Instrukcji Projektu

## Kontekst projektu

Projekt: **JSON Server Testing**
Technologie: Node.js, json-server, Playwright TypeScript, Postman, GitHub Actions

Cel projektu: Praktyka CRUD operations na REST API z wykorzystaniem:

- json-server (mock REST API na porcie 3001)
- Postman (manualne testowanie)
- Playwright TypeScript (automatyzacja testów API)
- GitHub Actions (CI/CD)

## Zadanie dla Copilot

Wygeneruj plik **copilot-instructions.md** - kompletny zestaw instrukcji dla modelu GitHub Copilot, które będą go prowadzić podczas generowania kodu, refaktoryzacji i wspierania deweloperów w tym projekcie.

Instrukcje mają definiować:

- Jak Copilot powinien podchodzić do generowania kodu testów API
- Jakich zasad, wzorców i konwencji ma przestrzegać
- Jak ma strukturyzować odpowiedzi i sugestie kodu
- Jakiego stylu kodowania ma się trzymać

Ten dokument będzie służył jako kontekst i przewodnik dla AI, aby zapewnić spójność i jakość generowanego kodu w projekcie.

## Wymagania

### 1. Zasady Czystego Kodu (Clean Code)

Instrukcje powinny zawierać wytyczne dotyczące:

- Czytelności i zrozumiałości kodu
- Nazewnictwa (zmiennych, funkcji, klas, plików)
- Długości funkcji i klas
- Unikania duplikacji kodu (DRY principle)
- Komentarzy i dokumentacji
- Formatowania kodu
- Przykłady DOBRYCH i ZŁYCH praktyk z konkretnym kodem

### 2. Zasady SOLID

Wyjaśnij i pokaż na przykładach jak stosować SOLID principles w kontekście testów API:

- **S**ingle Responsibility Principle - każda klasa/funkcja powinna mieć jedną odpowiedzialność
- **O**pen/Closed Principle - kod otwarty na rozszerzenia, zamknięty na modyfikacje
- **L**iskov Substitution Principle - podstawialność typów
- **I**nterface Segregation Principle - małe, wyspecjalizowane interfejsy
- **D**ependency Inversion Principle - zależność od abstrakcji, nie implementacji

Dla każdej zasady podaj:

- Definicję w kontekście testów API
- Przykład DOBREJ implementacji (kod TypeScript)
- Przykład ZŁEJ implementacji i jak ją poprawić

### 3. Wzorce Projektowe

Szczegółowo opisz i zaimplementuj:

#### Repository Pattern

- Czym jest i dlaczego jest istotny dla testów API
- Struktura katalogów dla repositories
- Kompletny przykład klasy Repository dla endpoint'u (np. UsersRepository)
- Korzyści zastosowania
- Kod przykładowy z interfejsami TypeScript

#### Data-Driven Testing

- Koncepcja i zalety
- Jak organizować dane testowe (pliki JSON, fixtures, test data builders)
- Przykład implementacji z Playwright
- Parametryzacja testów
- Kod przykładowy z wieloma zestawami danych

#### Dodatkowe wzorce (opcjonalnie rozważ):

- Builder Pattern dla złożonych request bodies
- Factory Pattern dla tworzenia instancji testowych
- Facade Pattern dla uproszczenia złożonych operacji API

### 4. Struktura Projektu Playwright TypeScript

Zaproponuj i opisz:

- Idealną strukturę folderów dla testów API (np. tests/, repositories/, models/, utils/, fixtures/)
- Konwencje nazewnictwa plików i folderów
- Gdzie umieszczać pomocnicze funkcje (helpers, utilities)
- Organizacja test fixtures i test data
- Konfiguracja playwright.config.ts - best practices

### 5. Standardy TypeScript

Wytyczne dotyczące:

- Używanie typów i interfejsów (kiedy co?)
- Unikanie `any`
- Używanie enums, type aliases, union types
- Async/await best practices
- Error handling w testach API
- Przykłady typowania request/response models

### 6. Konwencje Testów

Opisz standardy dla:

- Nazewnictwa test suites i test cases (describe/it blocks)
- AAA pattern (Arrange-Act-Assert)
- Setup i teardown (beforeEach, afterEach, beforeAll, afterAll)
- Test isolation i niezależność testów
- Assertions - jakich używać i jak
- Przykładowy test pokazujący wszystkie dobre praktyki

### 7. Dokumentacja

Wytyczne odnośnie:

- JSDoc comments dla funkcji publicznych
- README dla poszczególnych modułów
- Komentarze inline - kiedy są potrzebne, kiedy zbędne
- Dokumentowanie API endpoints i expected responses

### 8. Git i Collaboration

- Konwencje commit messages
- Branching strategy
- Code review checklist
- Pull request template expectations

### 9. Przykłady Kodu

Dla każdej sekcji dołącz:

- ✅ Przykład DOBREJ praktyki (z komentarzem dlaczego jest dobra)
- ❌ Przykład ZŁEJ praktyki (z komentarzem dlaczego jest zła i jak poprawić)
- 🔧 Refactoring - pokaż transformację z kodu złego do dobrego

### 10. Checklist dla Developerów

Stwórz checklistę, którą developer powinien przejść przed commitem:

- [ ] Kod jest czytelny i zrozumiały
- [ ] Nazewnictwo jest jasne i konsekwentne
- [ ] Nie ma duplikacji kodu
- [ ] Zasady SOLID są przestrzegane
- [ ] Testy są niezależne i powtarzalne
- [ ] Typy TypeScript są prawidłowo zdefiniowane
- [ ] Dokumentacja jest aktualna
- itp.
  Zapisz ją w oddzielnym pliku docs/pr.md

## Format Odpowiedzi

Wygeneruj dokument w formacie Markdown z:

- Jasną strukturą nagłówków (H1, H2, H3)
- Blokami kodu z syntax highlighting (```typescript)
- Tabelami porównawczymi gdzie sensowne
- Emoji dla łatwiejszej nawigacji (✅ ❌ 🔧 💡 ⚠️)
- Linkami do oficjalnej dokumentacji gdzie stosowne

## Język

Wszystkie instrukcje, opisy i komentarze w kodzie napisz **PO POLSKU**.

## Poziom Szczegółowości

Dokument powinien być **szczegółowy z konkretnymi przykładami kodu**. Każda koncepcja powinna być zilustrowana działającym kodem TypeScript w kontekście testów API z Playwright.

---

**Rozpocznij generowanie kompletnych instrukcji dla projektu json-server-testing zgodnie z powyższymi wymaganiami.**
