import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'settings' })
export class Settings {
	@PrimaryGeneratedColumn()
	id!: number;

	@Column({ type: 'varchar', nullable: true })
	meta_title!: string;

	@Column({ type: 'varchar', nullable: true })
	meta_description!: string;

	@Column({ type: 'varchar', nullable: true })
	meta_keywords!: string;

	@Column({ type: 'varchar', nullable: true })
	logo!: string;

	@Column({ type: 'varchar', nullable: true })
	store_name!: string;

	@Column({ type: 'varchar', nullable: true })
	store_owner!: string;

	@Column({ type: 'varchar', nullable: true })
	geocode!: string;

	@Column({ type: 'varchar', nullable: true })
	email!: string;

	@Column({ type: 'varchar', nullable: true })
	phone!: string;

	@Column({ type: 'varchar', nullable: true })
	address!: string;

	@Column({ type: 'varchar', nullable: true })
	image!: string;

	@Column({ type: 'varchar', nullable: true })
	opening_times!: string;

	@Column({ type: 'varchar', nullable: true })
	comment!: string;

	@Column({ type: 'json', nullable: true })
	time_zone!: object;

	@Column({ type: 'json', nullable: true })
	length_class!: object;

	@Column({ type: 'json', nullable: true })
	weight_class!: object;

	@Column({ type: 'json', nullable: true })
	currency!: object;

	@Column({ type: 'json', nullable: true })
	currency_rate_engine!: object;

	@Column({ type: 'boolean', nullable: false, default: false })
	auto_update_currency!: boolean;

	@Column({ type: 'text', nullable: true })
	list_description_limit!: string;

	@Column({ type: 'int', nullable: false, default: 10 })
	default_items_per_page!: number;

	@Column({ type: 'int', nullable: false, default: 10 })
	default_items_per_page_admin!: number;

	@Column({ type: 'boolean', nullable: false, default: false })
	product_report_status!: boolean;

	@Column({ type: 'boolean', nullable: false, default: false })
	category_product_count!: boolean;

	@Column({ type: 'boolean', nullable: false, default: false })
	allow_reviews!: boolean;

	@Column({ type: 'boolean', nullable: false, default: false })
	allow_reviews_products_purchased!: boolean;

	@Column({ type: 'boolean', nullable: false, default: false })
	allow_guest_reviews!: boolean;

	@Column({ type: 'integer', nullable: true })
	voucher_min!: number;

	@Column({ type: 'integer', nullable: true })
	voucher_max!: number;

	@Column({ type: 'json', nullable: true })
	cookie_policy!: object;

	@Column({ type: 'json', nullable: true })
	gdpr_policy!: object;

	@Column({ type: 'integer', nullable: true })
	gdpr_limit!: number;

	@Column({ type: 'boolean', nullable: false, default: false })
	display_prices_with_tax!: boolean;

	@Column({ type: 'boolean', nullable: false, default: false })
	use_store_tax_address!: object;

	@Column({ type: 'json', nullable: true })
	use_customer_tax_address!: object;

	@Column({ type: 'integer', nullable: true })
	customers_online_timeout!: number;

	@Column({ type: 'integer', default: 5 })
	max_login_attempts!: number;

	@Column({ type: 'json', nullable: true })
	account_terms!: object;

	@Column({ type: 'boolean', nullable: false, default: false })
	customers_online!: boolean;

	@Column({ type: 'boolean', nullable: false, default: false })
	customers_activity!: boolean;

	@Column({ type: 'boolean', nullable: false, default: false })
	log_customers_searches!: boolean;

	@Column({ type: 'boolean', nullable: false, default: false })
	login_display_prices!: boolean;

	@Column({ type: 'boolean', nullable: false, default: false })
	telephone_display!: boolean;

	@Column({ type: 'boolean', nullable: false, default: false })
	telephone_required!: boolean;

	@Column({ type: 'varchar', nullable: true })
	invoice_prefix!: string;

	@Column({ type: 'boolean', nullable: false, default: false })
	display_weight_on_cart_page!: boolean;

	@Column({ type: 'boolean', nullable: false, default: false })
	guest_checkout!: boolean;

	@Column({ type: 'boolean', nullable: false, default: false })
	billing_address_required!: boolean;

	@Column({ type: 'json', nullable: true })
	checkout_terms!: object;

	@Column({ type: 'json', nullable: true })
	processing_order_status!: object;

	@Column({ type: 'json', nullable: true })
	complete_order_status!: object;

	@Column({ type: 'json', nullable: true })
	fraud_order_status!: object;

	@Column({ type: 'json', nullable: true })
	subscription_status!: object;

	@Column({ type: 'json', nullable: true })
	subscription_active_status!: object;

	@Column({ type: 'json', nullable: true })
	subscription_expired_status!: object;

	@Column({ type: 'json', nullable: true })
	subscription_canceled_status!: object;

	@Column({ type: 'json', nullable: true })
	subscription_failed_status!: object;

	@Column({ type: 'json', nullable: true })
	subscription_denied_status!: object;

	@Column({ type: 'boolean', nullable: false, default: false })
	display_stock!: boolean;

	@Column({ type: 'boolean', nullable: false, default: false })
	show_out_of_stock_warning!: boolean;

	@Column({ type: 'boolean', nullable: false, default: false })
	stock_checkout!: boolean;

	@Column({ type: 'json', nullable: true })
	return_status!: object;

	@Column({ type: 'json', nullable: true })
	return_terms!: object;

	@Column({ type: 'integer', nullable: true })
	category_image_size_width!: number;

	@Column({ type: 'integer', nullable: true })
	category_image_size_height!: number;

	@Column({ type: 'integer', nullable: true })
	product_image_thumb_width!: number;

	@Column({ type: 'integer', nullable: true })
	product_image_thumb_height!: number;

	@Column({ type: 'integer', nullable: true })
	product_image_popup_width!: number;

	@Column({ type: 'integer', nullable: true })
	product_image_popup_height!: number;

	@Column({ type: 'integer', nullable: true })
	product_image_list_width!: number;

	@Column({ type: 'integer', nullable: true })
	product_image_list_height!: number;

	@Column({ type: 'integer', nullable: true })
	additional_product_image_width!: number;

	@Column({ type: 'integer', nullable: true })
	additional_product_image_height!: number;

	@Column({ type: 'integer', nullable: true })
	relative_product_image_width!: number;

	@Column({ type: 'integer', nullable: true })
	relative_product_image_height!: number;

	@Column({ type: 'integer', nullable: true })
	compare_image_width!: number;

	@Column({ type: 'integer', nullable: true })
	compare_image_height!: number;

	@Column({ type: 'integer', nullable: true })
	wishlist_image_width!: number;

	@Column({ type: 'integer', nullable: true })
	wishlist_image_height!: number;

	@Column({ type: 'integer', nullable: true })
	cart_image_width!: number;

	@Column({ type: 'integer', nullable: true })
	cart_image_height!: number;

	@Column({ type: 'integer', nullable: true })
	store_image_width!: number;

	@Column({ type: 'integer', nullable: true })
	store_image_height!: number;

	@Column({ type: 'json', nullable: true })
	mail_engine!: object;

	@Column({ type: 'varchar', nullable: true })
	mail_parameters!: string;

	@Column({ type: 'varchar', nullable: true })
	hostname!: string;

	@Column({ type: 'varchar', nullable: true })
	username!: string;

	@Column({ type: 'varchar', nullable: true })
	password!: string;

	@Column({ type: 'integer', nullable: true })
	port!: number;

	@Column({ type: 'integer', nullable: true })
	timeout!: number;

	@Column({ type: 'json', nullable: true })
	alert_mail!: object;

	@Column({ type: 'varchar', nullable: true })
	additional_alert_mail!: string;
}
