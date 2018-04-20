<template>
	<div class="form">
		<form>
			<div class="form__wrap">
				<!--LEFT-PART-->
				<div class="form__part">
					<div class="form__block">
						<label for="name" class="form__title">Представьтесь *</label>
						<div  class="form__input-wrap">
							<input id="name" type="text" class="form__input">
						</div>
					</div>
					<div class="form__block">
						<label for="tel" class="form__title">Телефон *</label>
						<div class="form__input-wrap">
							<input id="tel" type="text" class="form__input" placeholder="+7(ХХХ) ХХХ-ХХ-ХХ">
						</div>
					</div>
					<div class="form__block">
						<label for="mail" class="form__title">Е-mail *</label>
						<div class="form__input-wrap">
							<input id="mail" type="text" class="form__input">
						</div>
					</div>
				</div>
				<!--/LEFT-PART-->
				<!--RIGHT-PART-->
				<div class="form__part">
					<div class="form__block">
						<p class="form__title">Период *</p>
						<div class="form__radio">
							<div class="form__radio-wrap">
								<input id="input_1" type="radio" name="time" class="form__radio-item">
								<label for="input_1">3 месяца</label>
							</div>
							<div class="form__radio-wrap">
								<input id="input_2" type="radio" name="time" class="form__radio-item">
								<label for="input_2">6 месяцев</label>
							</div>
							<div class="form__radio-wrap">
								<input id="input_3" type="radio" name="time" class="form__radio-item">
								<label for="input_3">1 год</label>
							</div>
						</div>
					</div>
					<div class="form__block">
						<label for="texarea" class="form__title">Е-mail *</label>
						<textarea id="texarea" class="form__textarea" rows="9"></textarea>
					</div>
				</div>
				<!--/RIGHT-PART-->
			</div>

			<div class="form__alert">
				<div class="form__close">
					<span class="form__close-line"></span>
					<span class="form__close-line"></span>
				</div>
				<p class="form__alert-text">
					Внимание! Необходимо заполнить все обязательные поля!
				</p>
			</div>

			<button class="form__btn">Купить</button>
		</form>
	</div>
</template>

<script src="./form.js"></script>
<style lang="less" src="./form.less"></style>