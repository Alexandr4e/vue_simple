<template>
	<div class="wrap">
		<div class="form">
			<form>
				<div class="form__left-part">
					<div class="block">
						<p class="block__title">Представьтесь *</p>
						<input type="text" class="block__input">
					</div>
					<div class="block">
						<p class="block__title">Телефон *</p>
						<input type="text" class="block__input" placeholder="+7(ХХХ) ХХХ-ХХ-ХХ">
					</div>
					<div class="block">
						<p class="block__title">Е-mail *</p>
						<input type="text" class="block__input">
					</div>
				</div>
				<div class="form__right-part">
					<div class="block">
						<p class="block__title">Период *</p>
						<div class="block__radio">
							<input type="radio" class="block__input">
							<input type="radio" class="block__input">
							<input type="radio" class="block__input">
						</div>
					</div>
					<div class="block">
						<p class="block__title">Е-mail *</p>
						<input type="text" class="block__input">
					</div>
				</div>
			</form>
		</div>
	</div>
</template>

<script src="./form.js"></script>
<style lang="less" src="./form.less"></style>