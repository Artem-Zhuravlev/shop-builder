import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrated1724950118545 implements MigrationInterface {
    name = 'Migrated1724950118545'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "settings" ALTER COLUMN "auto_update_currency" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "settings" ALTER COLUMN "auto_update_currency" SET DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "settings" ALTER COLUMN "product_report_status" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "settings" ALTER COLUMN "product_report_status" SET DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "settings" ALTER COLUMN "category_product_count" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "settings" ALTER COLUMN "category_product_count" SET DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "settings" ALTER COLUMN "allow_reviews" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "settings" ALTER COLUMN "allow_reviews" SET DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "settings" ALTER COLUMN "allow_reviews_products_purchased" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "settings" ALTER COLUMN "allow_reviews_products_purchased" SET DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "settings" ALTER COLUMN "allow_guest_reviews" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "settings" ALTER COLUMN "allow_guest_reviews" SET DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "settings" ALTER COLUMN "display_prices_with_tax" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "settings" ALTER COLUMN "display_prices_with_tax" SET DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "settings" DROP COLUMN "use_store_tax_address"`);
        await queryRunner.query(`ALTER TABLE "settings" ADD "use_store_tax_address" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "settings" ALTER COLUMN "customers_online" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "settings" ALTER COLUMN "customers_online" SET DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "settings" ALTER COLUMN "customers_activity" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "settings" ALTER COLUMN "customers_activity" SET DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "settings" ALTER COLUMN "log_customers_searches" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "settings" ALTER COLUMN "log_customers_searches" SET DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "settings" ALTER COLUMN "login_display_prices" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "settings" ALTER COLUMN "login_display_prices" SET DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "settings" ALTER COLUMN "telephone_display" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "settings" ALTER COLUMN "telephone_display" SET DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "settings" ALTER COLUMN "telephone_required" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "settings" ALTER COLUMN "telephone_required" SET DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "settings" ALTER COLUMN "display_weight_on_cart_page" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "settings" ALTER COLUMN "display_weight_on_cart_page" SET DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "settings" ALTER COLUMN "guest_checkout" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "settings" ALTER COLUMN "guest_checkout" SET DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "settings" ALTER COLUMN "billing_address_required" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "settings" ALTER COLUMN "billing_address_required" SET DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "settings" DROP COLUMN "checkout_terms"`);
        await queryRunner.query(`ALTER TABLE "settings" ADD "checkout_terms" json`);
        await queryRunner.query(`ALTER TABLE "settings" ALTER COLUMN "display_stock" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "settings" ALTER COLUMN "display_stock" SET DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "settings" ALTER COLUMN "show_out_of_stock_warning" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "settings" ALTER COLUMN "show_out_of_stock_warning" SET DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "settings" ALTER COLUMN "stock_checkout" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "settings" ALTER COLUMN "stock_checkout" SET DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "settings" ALTER COLUMN "stock_checkout" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "settings" ALTER COLUMN "stock_checkout" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "settings" ALTER COLUMN "show_out_of_stock_warning" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "settings" ALTER COLUMN "show_out_of_stock_warning" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "settings" ALTER COLUMN "display_stock" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "settings" ALTER COLUMN "display_stock" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "settings" DROP COLUMN "checkout_terms"`);
        await queryRunner.query(`ALTER TABLE "settings" ADD "checkout_terms" boolean`);
        await queryRunner.query(`ALTER TABLE "settings" ALTER COLUMN "billing_address_required" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "settings" ALTER COLUMN "billing_address_required" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "settings" ALTER COLUMN "guest_checkout" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "settings" ALTER COLUMN "guest_checkout" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "settings" ALTER COLUMN "display_weight_on_cart_page" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "settings" ALTER COLUMN "display_weight_on_cart_page" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "settings" ALTER COLUMN "telephone_required" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "settings" ALTER COLUMN "telephone_required" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "settings" ALTER COLUMN "telephone_display" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "settings" ALTER COLUMN "telephone_display" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "settings" ALTER COLUMN "login_display_prices" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "settings" ALTER COLUMN "login_display_prices" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "settings" ALTER COLUMN "log_customers_searches" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "settings" ALTER COLUMN "log_customers_searches" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "settings" ALTER COLUMN "customers_activity" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "settings" ALTER COLUMN "customers_activity" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "settings" ALTER COLUMN "customers_online" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "settings" ALTER COLUMN "customers_online" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "settings" DROP COLUMN "use_store_tax_address"`);
        await queryRunner.query(`ALTER TABLE "settings" ADD "use_store_tax_address" json`);
        await queryRunner.query(`ALTER TABLE "settings" ALTER COLUMN "display_prices_with_tax" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "settings" ALTER COLUMN "display_prices_with_tax" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "settings" ALTER COLUMN "allow_guest_reviews" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "settings" ALTER COLUMN "allow_guest_reviews" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "settings" ALTER COLUMN "allow_reviews_products_purchased" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "settings" ALTER COLUMN "allow_reviews_products_purchased" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "settings" ALTER COLUMN "allow_reviews" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "settings" ALTER COLUMN "allow_reviews" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "settings" ALTER COLUMN "category_product_count" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "settings" ALTER COLUMN "category_product_count" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "settings" ALTER COLUMN "product_report_status" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "settings" ALTER COLUMN "product_report_status" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "settings" ALTER COLUMN "auto_update_currency" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "settings" ALTER COLUMN "auto_update_currency" DROP NOT NULL`);
    }

}
