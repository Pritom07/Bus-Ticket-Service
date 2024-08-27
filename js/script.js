document.addEventListener("DOMContentLoaded", function () {
    const seatsButton = document.querySelectorAll(".seat-btn");
    seatsButton.forEach((seat) => {
        seat.addEventListener("click", function (event) {
            const seatNumber = event.target.innerText;
            const ulID = document.getElementById("selected-seat");
            const li = document.createElement("li");
            const p1 = document.createElement("p");
            p1.textContent = seatNumber;
            const p2 = document.createElement("p");
            p2.textContent = "Economy";
            const p3 = document.createElement("p");
            p3.textContent = "550";
            li.appendChild(p1);
            li.appendChild(p2);
            li.appendChild(p3);
            li.classList.add("flex");
            li.classList.add("justify-between");
            li.classList.add("items-center");
            ulID.appendChild(li);
            const prevVal = getTextById("total-selected-seats");
            const newVal = prevVal + 1;
            setText("total-selected-seats", newVal);
            const prevLeftSeats = getTextById("left-seat");
            const newLeftSeats = prevLeftSeats - 1;
            setText("left-seat", newLeftSeats);
            const currentSelectedSeats = getTextById("total-selected-seats");
            const ticketPrice = currentSelectedSeats * 550;
            setText("total-price", ticketPrice);
            setText("grand-total", ticketPrice);
            if (currentSelectedSeats == 4) {
                const applyBtn = document.getElementById("apply-btn");
                applyBtn.removeAttribute("disabled");
                applyBtn.classList.add("bg-[#1DD100]");
                applyBtn.classList.add("hover:bg-[#1DD100]");
            }
            if (currentSelectedSeats > 4) {
                alert("Sorry sir. You can't purchase more than 4 tickets at a time. Best of luck for your happy journey.");
                return;
            }
            event.target.setAttribute("disabled", "true");
            event.target.style.backgroundColor = "LimeGreen";
            event.target.style.color = "black";

        })
    })
})

document.getElementById("apply-btn").addEventListener("click", function () {
    const couponField = getInputFieldValue("coupon-field");

    const singleDiscount = document.getElementById("single-discount-section");
    const coupleDiscount = document.getElementById("couple-discount-section");
    if (couponField === "NEW15") {
        singleDiscount.classList.remove("hidden");
        coupleDiscount.classList.add("hidden");
        settingDiscountAndTotal(15, "single-discount-amount");
    }
    else if (couponField === "Couple20") {
        coupleDiscount.classList.remove("hidden");
        singleDiscount.classList.add("hidden");
        settingDiscountAndTotal(20, "couple-discount-amount");
    }
    else {
        alert("Please enter correct coupon code to get the discount. Thank you");
        return;
    }
})
