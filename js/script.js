$(".preheader__banner_pink").hide();
setInterval(() => $(".preheader__banner").fadeToggle(500), 3000);

function accordeonInit() {
	$(".catalog__side-acc-content").hide();

	$(".catalog__side-acc-head").click(function () {
		$(this).parent().find(".catalog__side-acc-content").slideToggle(400);
		$(this).parent().find(".catalog__side-acc-head").toggleClass("active");
	});
}

function mobileMenuInit() {
	$(".catalog__filters").click(function () {
		$(".catalog__side").addClass("active");
		$("html").addClass("overflowed");
	});

	$(".catalog__side-close").click(function () {
		$(".catalog__side").removeClass("active");
		$("html").removeClass("overflowed");
	});
}

function langDropdownInit() {
	$(".header__lang-dropdown").hide();

	$(".header__current-lang").click(function () {
		$(".header__lang-dropdown").slideToggle();
		$(".header__current-lang").toggleClass("active");
	});
}

function sortDropdownInit() {
	$(".catalog__sort-dropdown").hide();

	$(".catalog__sort-choose").click(function () {
		$(".catalog__sort-dropdown").slideToggle();
		$(".catalog__sort-choose").toggleClass("active");
	});
}

function sliderInit() {
	$("#slider").slider({
		animate: "slow",
		range: "min",
		value: 50,
		min: 980,
		max: 20465,
	});

	$("#slider").slider({
		animate: "slow",
		range: true,
		values: [980, 20465],
		slide: function (event, ui) {
			$("#slider-min").val(ui.values[0]);
			$("#slider-max").val(ui.values[1]);
		},
	});

	$("#slider-min, #slider-max").keypress(function () {
		if (event.keyCode == 13 && parseInt($("#slider-min").val()) < parseInt($("#slider-max").val())) {
			$("#slider").slider("values", 0, $("#slider-min").val());
			$("#slider").slider("values", 1, $("#slider-max").val());
		}
	});

	$("#slider-min, #slider-max").blur(function () {
		if (parseInt($("#slider-min").val()) < parseInt($("#slider-max").val())) {
			$("#slider").slider("values", 0, $("#slider-min").val());
			$("#slider").slider("values", 1, $("#slider-max").val());
		}
	});

	$(".numberonly").keypress(function (e) {
		var charCode = e.which ? e.which : event.keyCode;
		if (String.fromCharCode(charCode).match(/[^0-9]/g)) return false;
	});
}

$(document).ready(accordeonInit(), mobileMenuInit(), langDropdownInit(), sortDropdownInit(), sliderInit());
