<template>
	<div class="form" id="form">
		<form>
			<!--FORM-->
			<div class="form__wrap">
				<!--LEFT-PART-->
				<div class="form__part">
					<div class="form__block">
						<label for="name" class="form__title">Представьтесь *</label>
						<div  class="form__input-wrap">
							<input name="fio" id="name" v-model="fio" type="text" class="form__input" >
						</div>
					</div>
					<div class="form__block">
						<label for="tel" class="form__title">Телефон *</label>
						<div class="form__input-wrap">
							<input name="phone" v-model="phone" id="tel" type="text" class="form__input" placeholder="+7(ХХХ) ХХХ-ХХ-ХХ">
						</div>
					</div>
					<div class="form__block">
						<label for="mail" class="form__title">Е-mail *</label>
						<div class="form__input-wrap">
							<input name="email" v-model="mail" id="mail" type="text" class="form__input">
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
								<input name="period" type="hidden" :value="period">
								<button
										type="button"
										v-on:click="period = 3"
										v-bind:class="[ period === 3 ? 'form__radio-btn_active' : '', 'form__radio-btn']"
								>

								</button>
								<span class="form__radio-text" v-on:click="period = 3">3 месяца</span>
							</div>
							<div class="form__radio-wrap">
								<button
										type="button"
										v-on:click="period = 6"
										v-bind:class="[ period === 6 ? 'form__radio-btn_active' : '', 'form__radio-btn']"
								>
								</button>
								<span class="form__radio-text" v-on:click="period = 6">6 месяцев</span>
							</div>
							<div class="form__radio-wrap">
								<button
										type="button"
										v-on:click="period = 12"
										v-bind:class="[ period === 12 ? 'form__radio-btn_active' : '', 'form__radio-btn']"
								>
								</button>
								<span class="form__radio-text" v-on:click="period = 12">1 год</span>
							</div>
						</div>
					</div>
					<div class="form__block">
						<label for="texarea" class="form__title">Реквизиты *</label>
						<textarea name="area" v-model="area" id="texarea" class="form__textarea" rows="7"></textarea>
					</div>
				</div>
				<!--/RIGHT-PART-->
			</div>
			<!--/FORM-->
			<!--ALERT-MESSAGE-->
			<div class="form__alert" v-if="isError">
				<div class="form__close" v-on:click="isError = false">
					<span class="form__close-line"></span>
					<span class="form__close-line"></span>
				</div>
				<p class="form__alert-text">
					{{message}}
					<!--Внимание! Необходимо заполнить все обязательные поля!-->
				</p>
			</div>
			<!--/ALERT-MESSAGE-->
			<!--BUTTON-->
			<input type="submit" value="Купить" class="form__btn" v-on:click="messageFunc">
			<!--/BUTTON-->
		</form>
	</div>
</template>

<script src="./form.js"></script>
<style lang="less" src="./form.less"></style>